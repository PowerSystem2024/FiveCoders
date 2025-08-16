from conexion import obtener_conexion
from utilidades import hash_password, limpiar_pantalla
from menus import menu_admin, menu_admin_local, menu_bibliotecario
from config import ADMIN_EMAIL, ADMIN_CLAVE

"""
def login():
    e = input("Email: ")
    c = input("Clave: ")
    h = hash_password(c)
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT id, nombre, apellido, biblioteca_id, es_admin FROM bibliotecarios WHERE email=%s AND clave_hash=%s", (e, h))
    u = cur.fetchone()
    cur.close()
    conn.close()
    if u:
        print(f"Bienvenido {u[1]} {u[2]}")
        return {'id': u[0], 'nombre': u[1], 'apellido': u[2], 'biblioteca_id': u[3], 'es_admin': u[4]}
    print("Credenciales incorrectas")
    return None
"""

def login_unificado():
    email = input("Email: ")
    clave = input("Clave: ")
    if email == ADMIN_EMAIL and clave == ADMIN_CLAVE:
        print("Bienvenido, administrador general.")
        menu_admin()
        return

    # Si no es el admin general, intenta login como bibliotecario
    h = hash_password(clave)
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT id, nombre, apellido, biblioteca_id, es_admin FROM bibliotecarios WHERE email=%s AND clave_hash=%s", 
                (email, h))
    u = cur.fetchone()
    cur.close()
    conn.close()
    if u:
        print(f"Bienvenido {u[1]} {u[2]}")
        usuario = {'id': u[0], 'nombre': u[1], 'apellido': u[2], 'biblioteca_id': u[3], 'es_admin': u[4]}
        if usuario['es_admin']:
            menu_admin_local(usuario)
        else:
            menu_bibliotecario(usuario)
    else:
        print("Credenciales incorrectas")