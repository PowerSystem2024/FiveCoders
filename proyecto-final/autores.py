from colorama import Fore
from conexion import obtener_conexion
from utilidades import limpiar_pantalla

def crud_autores(biblioteca_id):
    while True:
        limpiar_pantalla()
        print("--- Gestión Autores ---")
        print("1. Ver autores")
        print("2. Agregar autor")
        print("3. Editar autor")
        print("4. Eliminar autor")
        print("v. Volver")
        op = input("Opción: ")
        if op == "1":
            ver_autores(biblioteca_id)
        elif op == "2":
            agregar_autor(biblioteca_id)
        elif op == "3":
            editar_autor(biblioteca_id)
        elif op == "4":
            eliminar_autor(biblioteca_id)
        elif op == "v":
            break
        else:
            print("Opción inválida.")

def ver_autores(biblioteca_id):
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT id, nombre, apellido, pais FROM autores WHERE biblioteca_id=%s;", (biblioteca_id,))
    autores = cur.fetchall()
    print("ID | Nombre | Apellido | País")
    for a in autores:
        print(f"{a[0]} | {a[1]} | {a[2]} | {a[3]}")
    cur.close()
    conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def agregar_autor(biblioteca_id):
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    pais = input("País: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO autores (nombre, apellido, pais, biblioteca_id) VALUES (%s, %s, %s, %s);",
        (nombre, apellido, pais, biblioteca_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    print("Autor agregado correctamente.")
    input("Presiona Enter para volver...")

def editar_autor(biblioteca_id):
    id_autor = input("ID del autor a editar: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT nombre, apellido, pais FROM autores WHERE id=%s AND biblioteca_id=%s;", (id_autor, biblioteca_id))
    autor = cur.fetchone()
    if not autor:
        print("Autor no encontrado.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    nombre = input(f"Nombre ({autor[0]}): ") or autor[0]
    apellido = input(f"Apellido ({autor[1]}): ") or autor[1]
    pais = input(f"País ({autor[2]}): ") or autor[2]
    cur.execute(
        "UPDATE autores SET nombre=%s, apellido=%s, pais=%s WHERE id=%s AND biblioteca_id=%s;",
        (nombre, apellido, pais, id_autor, biblioteca_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    print("Autor actualizado correctamente.")
    input("Presiona Enter para volver...")

def eliminar_autor(biblioteca_id):
    id_autor = input("ID del autor a eliminar: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("DELETE FROM autores WHERE id=%s AND biblioteca_id=%s;", (id_autor, biblioteca_id))
    conn.commit()
    cur.close()
    conn.close()
    print("Autor eliminado correctamente.")
    input("Presiona Enter para volver...")