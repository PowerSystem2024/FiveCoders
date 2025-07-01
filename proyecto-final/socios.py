from colorama import Fore
from tabulate import tabulate
from conexion import obtener_conexion
from utilidades import hash_password, limpiar_pantalla

def crud_socios(biblioteca_id):
    while True:
        limpiar_pantalla()
        print("--- Gestión Socios ---")
        print("1. Ver socios")
        print("2. Agregar socio")
        print("3. Editar socio")
        print("4. Eliminar socio")
        print("5. Buscar socio")
        print("v. Volver")
        op = input("Opción: ")
        if op == "1":
            ver_socios(biblioteca_id)
        elif op == "2":
            agregar_socio(biblioteca_id)
        elif op == "3":
            editar_socio(biblioteca_id)
        elif op == "4":
            eliminar_socio(biblioteca_id)
        elif op == "5":
            buscar_socios(biblioteca_id)
        elif op == "v":
            break
        else:
            print("Opción inválida.")

def ver_socios(biblioteca_id):
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT id, nombre, apellido, email FROM socios WHERE biblioteca_id=%s;", (biblioteca_id,))
    socios = cur.fetchall()
    headers = ["ID", "Nombre", "Apellido", "Email", "Libros prestados"]
    tabla = []
    for s in socios:
        cur.execute("SELECT titulo FROM libros WHERE prestado_a=%s AND biblioteca_id=%s;", (s[0], biblioteca_id))
        libros = cur.fetchall()
        libros_str = ", ".join([l[0] for l in libros]) if libros else "-"
        tabla.append([s[0], s[1], s[2], s[3], libros_str])
    print(tabulate(tabla, headers=headers, tablefmt="fancy_grid"))
    cur.close()
    conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def agregar_socio(biblioteca_id):
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    email = input("Email: ")
    clave = input("Clave: ")
    clave_hash = hash_password(clave)

    # Validación de campos obligatorios
    if not nombre or not apellido or not email or not clave:
        print("Todos los campos son obligatorios.")
        return

    conn = obtener_conexion()
    cur = conn.cursor()
    # Verificar unicidad de email
    cur.execute("SELECT id FROM socios WHERE email=%s;", (email,))
    if cur.fetchone():
        print("Ya existe un socio con ese email. No se puede agregar.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    cur.execute(
        "INSERT INTO socios (nombre, apellido, email, clave_hash, biblioteca_id) VALUES (%s, %s, %s, %s, %s);",
        (nombre, apellido, email, clave_hash, biblioteca_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    print("Socio agregado correctamente.")
    input("Presiona Enter para volver...")

def editar_socio(biblioteca_id):
    id_socio = input("ID del socio a editar: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT nombre, apellido, email FROM socios WHERE id=%s AND biblioteca_id=%s;", (id_socio, biblioteca_id))
    socio = cur.fetchone()
    if not socio:
        print("Socio no encontrado.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    nombre = input(f"Nombre ({socio[0]}): ") or socio[0]
    apellido = input(f"Apellido ({socio[1]}): ") or socio[1]
    email = input(f"Email ({socio[2]}): ") or socio[2]
    cur.execute(
        "UPDATE socios SET nombre=%s, apellido=%s, email=%s WHERE id=%s AND biblioteca_id=%s;",
        (nombre, apellido, email, id_socio, biblioteca_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    print("Socio actualizado correctamente.")
    input("Presiona Enter para volver...")

def eliminar_socio(biblioteca_id):
    id_socio = input("ID del socio a eliminar: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    # Libera los libros prestados a este socio
    cur.execute("UPDATE libros SET prestado = FALSE, prestado_a = NULL WHERE prestado_a = %s AND biblioteca_id = %s;", (id_socio, biblioteca_id))
    cur.execute("DELETE FROM socios WHERE id=%s AND biblioteca_id=%s;", (id_socio, biblioteca_id))
    conn.commit()
    cur.close()
    conn.close()
    print("Socio eliminado correctamente.")
    input("Presiona Enter para volver...")

def buscar_socios(biblioteca_id):
    limpiar_pantalla()
    print("--- Buscar Socios ---")
    criterio = input("Buscar por (nombre/email): ").strip().lower()
    valor = input("Valor de búsqueda: ").strip()
    conn = obtener_conexion()
    cur = conn.cursor()
    if criterio == "nombre":
        cur.execute("SELECT id, nombre, apellido, email FROM socios WHERE biblioteca_id=%s AND (nombre ILIKE %s OR apellido ILIKE %s);", (biblioteca_id, f"%{valor}%", f"%{valor}%"))
    elif criterio == "email":
        cur.execute("SELECT id, nombre, apellido, email FROM socios WHERE biblioteca_id=%s AND email ILIKE %s;", (biblioteca_id, f"%{valor}%"))
    else:
        print("Criterio no válido.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    resultados = cur.fetchall()
    print("ID | Nombre | Apellido | Email")
    for s in resultados:
        print(f"{s[0]} | {s[1]} | {s[2]} | {s[3]}")
    cur.close()
    conn.close()
    input("Presiona Enter para volver...")