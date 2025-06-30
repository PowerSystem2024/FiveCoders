from conexion import obtener_conexion
from utilidades import hash_password

def agregar_biblioteca():
    nombre = input("Nombre de la biblioteca: ")
    ubicacion = input("Ubicación: ")
    direccion = input("Dirección: ")
    email = input("Email: ")
    telefono = input("Teléfono: ")
    directivo = input("Nombre del directivo (admin local): ")
    # Datos para el admin local
    admin_nombre = directivo
    admin_apellido = input("Apellido del directivo: ")
    admin_email = input("Email del directivo: ")
    admin_clave = input("Clave para el directivo: ")

    sql_biblio = (
        "INSERT INTO bibliotecas "
        "(nombre, ubicacion, direccion, email, telefono, directivo) "
        "VALUES (%s, %s, %s, %s, %s, %s) RETURNING id;"
    )
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute(sql_biblio, (nombre, ubicacion, direccion, email, telefono, directivo))
    biblioteca_id = cur.fetchone()[0]  # Obtiene el id de la nueva biblioteca

    # Crear el admin local (directivo)
    clave_hash = hash_password(admin_clave)
    sql_admin = (
        "INSERT INTO bibliotecarios "
        "(nombre, apellido, email, clave_hash, biblioteca_id, es_admin) "
        "VALUES (%s, %s, %s, %s, %s, %s);"
    )
    cur.execute(sql_admin, (admin_nombre, admin_apellido, admin_email, clave_hash, biblioteca_id, True))
    conn.commit()
    cur.close()
    conn.close()
    print("Biblioteca y administrador local creados correctamente.")
    