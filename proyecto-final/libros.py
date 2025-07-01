from colorama import Fore
from tabulate import tabulate
from conexion import obtener_conexion
from utilidades import limpiar_pantalla, print_titulo

def crud_libros(biblioteca_id):
    while True:
        limpiar_pantalla()
        print_titulo("📚 Gestión Libros 📚")
        print(Fore.GREEN + "1. Ver libros")
        print(Fore.GREEN + "2. Agregar libro")
        print(Fore.YELLOW + "3. Editar libro")
        print(Fore.RED + "4. Eliminar libro")
        print(Fore.BLUE + "5. Prestar libro")
        print(Fore.BLUE + "6. Devolver libro")
        print(Fore.MAGENTA + "7. Buscar libro")
        print(Fore.WHITE + "v. Volver")
        op = input(Fore.WHITE + "Opción: ")
        if op == "1":
            ver_libros(biblioteca_id)
        elif op == "2":
            agregar_libro(biblioteca_id)
        elif op == "3":
            editar_libro(biblioteca_id)
        elif op == "4":
            eliminar_libro(biblioteca_id)
        elif op == "5":
            prestar_libro(biblioteca_id)
        elif op == "6":
            devolver_libro(biblioteca_id)
        elif op == "7":
            buscar_libros(biblioteca_id)
        elif op == "v":
            break
        else:
            print(Fore.RED + "Opción inválida.")

def ver_libros(biblioteca_id):
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("""
        SELECT libros.id, libros.titulo, autores.nombre, autores.apellido, libros.isbn, libros.prestado, socios.nombre, socios.apellido
        FROM libros
        LEFT JOIN autores ON libros.autor_id = autores.id
        LEFT JOIN socios ON libros.prestado_a = socios.id
        WHERE libros.biblioteca_id=%s;
    """, (biblioteca_id,))
    libros = cur.fetchall()
    headers = ["ID", "Título", "Autor", "ISBN", "Prestado", "Socio"]
    tabla = []
    for l in libros:
        autor = f"{l[2]} {l[3]}" if l[2] else "Sin autor"
        prestado = "Sí" if l[5] else "No"
        socio = f"{l[6]} {l[7]}" if l[5] and l[6] else "-"
        tabla.append([l[0], l[1], autor, l[4], prestado, socio])
    print(tabulate(tabla, headers=headers, tablefmt="fancy_grid"))
    cur.close()
    conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def agregar_libro(biblioteca_id):
    titulo = input("Título: ")
    # Seleccionar autor de los autores de la biblioteca
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT id, nombre, apellido FROM autores WHERE biblioteca_id=%s;", (biblioteca_id,))
    autores = cur.fetchall()
    if not autores:
        print("No hay autores registrados en esta biblioteca. Debe agregar uno primero.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    print("Autores disponibles:")
    for a in autores:
        print(f"{a[0]}: {a[1]} {a[2]}")
    autor_id = input("ID del autor: ")
    isbn = input("ISBN: ")

    # Verificar unicidad de ISBN
    cur.execute("SELECT id FROM libros WHERE isbn=%s;", (isbn,))
    if cur.fetchone():
        print("Ya existe un libro con ese ISBN. No se puede agregar.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return

    cur.execute(
        "INSERT INTO libros (titulo, autor_id, isbn, biblioteca_id) VALUES (%s, %s, %s, %s);",
        (titulo, autor_id, isbn, biblioteca_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    print("Libro agregado correctamente.")
    input("Presiona Enter para volver...")

def editar_libro(biblioteca_id):
    id_libro = input("ID del libro a editar: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT titulo, autor_id, isbn FROM libros WHERE id=%s AND biblioteca_id=%s;", (id_libro, biblioteca_id))
    libro = cur.fetchone()
    if not libro:
        print("Libro no encontrado.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    titulo = input(f"Título ({libro[0]}): ") or libro[0]
    # Seleccionar autor de los autores de la biblioteca
    cur.execute("SELECT id, nombre, apellido FROM autores WHERE biblioteca_id=%s;", (biblioteca_id,))
    autores = cur.fetchall()
    print("Autores disponibles:")
    for a in autores:
        print(f"{a[0]}: {a[1]} {a[2]}")
    autor_id = input(f"ID del autor actual ({libro[1]}): ") or libro[1]
    isbn = input(f"ISBN ({libro[2]}): ") or libro[2]
    cur.execute(
        "UPDATE libros SET titulo=%s, autor_id=%s, isbn=%s WHERE id=%s AND biblioteca_id=%s;",
        (titulo, autor_id, isbn, id_libro, biblioteca_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    print("Libro actualizado correctamente.")
    input("Presiona Enter para volver...")

def eliminar_libro(biblioteca_id):
    id_libro = input("ID del libro a eliminar: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("DELETE FROM libros WHERE id=%s AND biblioteca_id=%s;", (id_libro, biblioteca_id))
    conn.commit()
    cur.close()
    conn.close()
    print("Libro eliminado correctamente.")
    input("Presiona Enter para volver...")

def buscar_libros(biblioteca_id):
    limpiar_pantalla()
    print("--- Buscar Libros ---")
    criterio = input("Buscar por (titulo/autor/isbn): ").strip().lower()
    valor = input("Valor de búsqueda: ").strip()
    conn = obtener_conexion()
    cur = conn.cursor()
    if criterio == "titulo":
        cur.execute("""
            SELECT libros.id, libros.titulo, autores.nombre, autores.apellido, libros.isbn
            FROM libros
            LEFT JOIN autores ON libros.autor_id = autores.id
            WHERE libros.biblioteca_id=%s AND libros.titulo ILIKE %s;
        """, (biblioteca_id, f"%{valor}%"))
    elif criterio == "autor":
        cur.execute("""
            SELECT libros.id, libros.titulo, autores.nombre, autores.apellido, libros.isbn
            FROM libros
            LEFT JOIN autores ON libros.autor_id = autores.id
            WHERE libros.biblioteca_id=%s AND (autores.nombre ILIKE %s OR autores.apellido ILIKE %s);
        """, (biblioteca_id, f"%{valor}%", f"%{valor}%"))
    elif criterio == "isbn":
        cur.execute("""
            SELECT libros.id, libros.titulo, autores.nombre, autores.apellido, libros.isbn
            FROM libros
            LEFT JOIN autores ON libros.autor_id = autores.id
            WHERE libros.biblioteca_id=%s AND libros.isbn=%s;
        """, (biblioteca_id, valor))
    else:
        print("Criterio no válido.")
        cur.close()
        conn.close()
        input("Presiona Enter para volver...")
        return
    resultados = cur.fetchall()
    print("ID | Título | Autor | ISBN")
    for l in resultados:
        autor = f"{l[2]} {l[3]}" if l[2] else "Sin autor"
        print(f"{l[0]} | {l[1]} | {autor} | {l[4]}")
    cur.close()
    conn.close()
    input("Presiona Enter para volver...")

def prestar_libro(biblioteca_id):
    limpiar_pantalla()
    print_titulo("📚 Prestar Libro 📚")
    id_socio = input("ID del socio: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    # Verifica que el socio existe
    cur.execute("SELECT id FROM socios WHERE id=%s AND biblioteca_id=%s;", (id_socio, biblioteca_id))
    if not cur.fetchone():
        print(Fore.RED + "Socio no encontrado.")
        cur.close()
        conn.close()
        input(Fore.YELLOW + "Presiona Enter para volver...")
        return
    # Muestra libros disponibles
    cur.execute("SELECT id, titulo FROM libros WHERE biblioteca_id=%s AND prestado=FALSE;", (biblioteca_id,))
    libros = cur.fetchall()
    if not libros:
        print(Fore.YELLOW + "No hay libros disponibles para prestar.")
        cur.close()
        conn.close()
        input(Fore.YELLOW + "Presiona Enter para volver...")
        return
    print(Fore.CYAN + "Libros disponibles:")
    for l in libros:
        print(f"{l[0]}: {l[1]}")
    id_libro = input("ID del libro a prestar: ")
    cur.execute("UPDATE libros SET prestado=TRUE, prestado_a=%s WHERE id=%s AND biblioteca_id=%s AND prestado=FALSE;", (id_socio, id_libro, biblioteca_id))
    if cur.rowcount == 0:
        print(Fore.RED + "No se pudo prestar el libro (puede que ya esté prestado o el ID sea incorrecto).")
    else:
        print(Fore.GREEN + "Libro prestado correctamente.")
    conn.commit()
    cur.close()
    conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def devolver_libro(biblioteca_id):
    limpiar_pantalla()
    print_titulo("📚 Devolver Libro 📚")
    id_socio = input("ID del socio: ")
    conn = obtener_conexion()
    cur = conn.cursor()
    # Muestra libros prestados a este socio
    cur.execute("SELECT id, titulo FROM libros WHERE biblioteca_id=%s AND prestado=TRUE AND prestado_a=%s;", (biblioteca_id, id_socio))
    libros = cur.fetchall()
    if not libros:
        print(Fore.YELLOW + "Este socio no tiene libros prestados.")
        cur.close()
        conn.close()
        input(Fore.YELLOW + "Presiona Enter para volver...")
        return
    print(Fore.CYAN + "Libros prestados a este socio:")
    for l in libros:
        print(f"{l[0]}: {l[1]}")
    id_libro = input("ID del libro a devolver: ")
    cur.execute("UPDATE libros SET prestado=FALSE, prestado_a=NULL WHERE id=%s AND biblioteca_id=%s AND prestado_a=%s;", (id_libro, biblioteca_id, id_socio))
    if cur.rowcount == 0:
        print(Fore.RED + "No se pudo devolver el libro (ID incorrecto o no está prestado a este socio).")
    else:
        print(Fore.GREEN + "Libro devuelto correctamente.")
    conn.commit()
    cur.close()
    conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")