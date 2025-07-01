from conexion import obtener_conexion
from utilidades import hash_password

def agregar_bibliotecario(biblioteca_id):
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
    sql = (
        "INSERT INTO bibliotecarios "
        "(nombre, apellido, email, clave_hash, biblioteca_id, es_admin) "
        "VALUES (%s, %s, %s, %s, %s, %s);"
    )
    cur.execute(sql, (nombre, apellido, email, clave_hash, biblioteca_id, False))
    conn.commit()
    cur.close()
    conn.close()
    print("Bibliotecario registrado correctamente.")

def crud_bibliotecarios(biblioteca_id):
    print(f"--- Menú Gestión Bibliotecarios para Biblioteca ID: {biblioteca_id} ---")
    print("Funcionalidad aún no implementada.")
    input("Presiona Enter para volver...")
    