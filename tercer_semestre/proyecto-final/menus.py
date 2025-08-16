import sys
from colorama import Fore
from tabulate import tabulate
from utilidades import limpiar_pantalla, obtener_nombre_biblioteca, hash_password
from conexion import obtener_conexion
from bibliotecarios import agregar_bibliotecario, crud_bibliotecarios
from libros import crud_libros
from socios import crud_socios
from autores import crud_autores

def menu():
    opts = {
        '1': ('Login', lambda: __import__('autenticacion').login_unificado()),
        '0': ('Salir', lambda: sys.exit(0))
    }
    while True:
        limpiar_pantalla()
        print("\n--- Menú ---")
        for k, (d, _) in opts.items():
            print(f"{k}. {d}")
        o = input("Opción: ")
        if o in opts:
            opts[o][1]()
        else:
            print("Opción inválida.")

def menu_bibliotecario(usuario):
    nombre_biblioteca = obtener_nombre_biblioteca(usuario['biblioteca_id'])
    while True:
        limpiar_pantalla()
        print(f"\n--- Menú Bibliotecario ({nombre_biblioteca}) ---")
        print("1. Gestión Libros de mi biblioteca")
        print("2. Gestión Socios de mi biblioteca")
        print("3. Gestión Autores")
        print("v. Volver")
        op = input("Opción: ")
        if op == "1":
            crud_libros(usuario['biblioteca_id'])
        elif op == "2":
            crud_socios(usuario['biblioteca_id'])
        elif op == "3":
            crud_autores(usuario['biblioteca_id'])
        elif op == "v":
            break
        else:
            print("Opción inválida.")

def menu_admin_local(usuario):
    nombre_biblioteca = obtener_nombre_biblioteca(usuario['biblioteca_id'])
    while True:
        limpiar_pantalla()
        print(f"\n--- Menú Administrador de Biblioteca ({nombre_biblioteca}) ---")
        print("1. Registrar bibliotecario")
        print("2. Gestión Libros de mi biblioteca")
        print("3. Gestión Socios de mi biblioteca")
        print("4. Gestión Autores")
        print("5. Gestión Bibliotecarios de mi biblioteca")
        print("v. Volver")
        op = input("Opción: ")
        if op == "1":
            agregar_bibliotecario(usuario['biblioteca_id'])
        elif op == "2":
            crud_libros(usuario['biblioteca_id'])
        elif op == "3":
            crud_socios(usuario['biblioteca_id'])
        elif op == "4":
            crud_autores(usuario['biblioteca_id'])
        elif op == "5":
            crud_bibliotecarios(usuario['biblioteca_id'])
        elif op == "v":
            break
        else:
            print("Opción inválida.")

def menu_admin():
    """Menú Gestión para el administrador general."""
    while True:
        limpiar_pantalla()
        print("\n--- Menú Administrador General ---")
        print("1. Registrar biblioteca")
        print("2. Ver registros de una tabla")
        print("3. Insertar registro en una tabla")
        print("4. Actualizar registro en una tabla")
        print("5. Eliminar registro de una tabla")
        print("0. Volver")
        op = input("Opción: ")
        if op == "1":
            from bibliotecas import agregar_biblioteca
            agregar_biblioteca()
        elif op == "2":
            ver_tabla()
        elif op == "3":
            insertar_en_tabla()
        elif op == "4":
            actualizar_tabla()
        elif op == "5":
            eliminar_de_tabla()
        elif op == "0":
            break
        else:
            print("Opción inválida.")

def elegir_tabla():
    tablas = ["bibliotecas", "autores", "bibliotecarios", "socios", "libros"]
    while True:
        print("Tablas disponibles:")
        for i, t in enumerate(tablas, 1):
            print(f"{i}. {t}")
        print("v. Volver")
        idx = input("Elige una tabla (número): ")
        if idx == 'v':
            return None
        try:
            return tablas[int(idx)-1]
        except:
            print("Selección inválida.")

def ver_tabla():
    tabla = elegir_tabla()
    if not tabla: return
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM {tabla};")
    filas = cur.fetchall()
    colnames = [desc[0] for desc in cur.description]
    print(" | ".join(colnames))
    for fila in filas:
        print(" | ".join(str(x) for x in fila))
    cur.close()
    conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def insertar_en_tabla():
    tabla = elegir_tabla()
    if not tabla: return
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM {tabla} LIMIT 0;")
    columnas = [desc[0] for desc in cur.description if desc[0] != "id"]
    valores = []
    for col in columnas:
        val = input(f"{col} (o 'v' para volver): ")
        if val == 'v':
            cur.close()
            conn.close()
            return
        # Manejo especial para la clave de bibliotecario/socio si aplica
        if col == 'clave_hash':
            val = hash_password(val)
        valores.append(val)
    cols_str = ", ".join(columnas)
    vals_str = ", ".join(["%s"]*len(columnas))
    sql = f"INSERT INTO {tabla} ({cols_str}) VALUES ({vals_str});"
    try:
        cur.execute(sql, valores)
        conn.commit()
        print("Registro insertado correctamente.")
    except Exception as e:
        conn.rollback()
        print(f"Error al insertar el registro: {e}")
    finally:
        cur.close()
        conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def actualizar_tabla():
    tabla = elegir_tabla()
    if not tabla: return
    conn = obtener_conexion()
    cur = conn.cursor()
    id_reg = input("ID del registro a actualizar (o 'v' para volver): ")
    if id_reg == 'v':
        cur.close()
        conn.close()
        return
    cur.execute(f"SELECT * FROM {tabla} WHERE id=%s;", (id_reg,))
    fila = cur.fetchone()
    if not fila:
        print("Registro no encontrado.")
        cur.close()
        conn.close()
        input(Fore.YELLOW + "Presiona Enter para volver...")
        return
    columnas = [desc[0] for desc in cur.description if desc[0] != "id"]
    nuevos = []
    for i, col in enumerate(columnas):
        val_actual = fila[i+1] # +1 porque el índice 0 es el 'id'
        # Convertir valores de lista a string para mostrar si son listas
        if isinstance(val_actual, list):
            val_actual_str = "{" + ", ".join(map(str, val_actual)) + "}"
        else:
            val_actual_str = str(val_actual)

        val = input(f"{col} (actual: {val_actual_str}) (o 'v' para volver, dejar vacío para no cambiar): ")
        if val == 'v':
            cur.close()
            conn.close()
            return
        
        if val == '': # Si se deja vacío, usar el valor actual
            nuevos.append(val_actual)
        elif col == 'clave_hash': # Si es la clave, hashearla
            nuevos.append(hash_password(val))
        elif col == 'es_admin' or col == 'prestado': # Manejo de booleanos
            nuevos.append(val.lower() == 's' or val.lower() == 'true')
        elif col == 'libros_prestados': # Manejo de arrays de enteros
            try:
                # Intenta convertir la entrada en una lista de enteros
                # Espera un formato como "1,2,3" o "{1,2,3}"
                if val.startswith('{') and val.endswith('}'):
                    val = val[1:-1] # Quitar llaves
                nuevos.append([int(x.strip()) for x in val.split(',') if x.strip()])
            except ValueError:
                print(f"Advertencia: '{val}' no es un formato válido para libros_prestados. Usando valor actual.")
                nuevos.append(val_actual)
        else:
            nuevos.append(val)

    set_str = ", ".join([f"{col}=%s" for col in columnas])
    sql = f"UPDATE {tabla} SET {set_str} WHERE id=%s;"
    
    try:
        cur.execute(sql, nuevos + [id_reg])
        conn.commit()
        print("Registro actualizado correctamente.")
    except Exception as e:
        conn.rollback()
        print(f"Error al actualizar el registro: {e}")
    finally:
        cur.close()
        conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")

def eliminar_de_tabla():
    tabla = elegir_tabla()
    if not tabla: return

    id_reg = input(f"ID del registro a eliminar de '{tabla}' (o 'v' para volver): ")
    if id_reg == 'v':
        return

    conn = obtener_conexion()
    cur = conn.cursor()

    try:
        if tabla == 'bibliotecas':
            print(f"Eliminando bibliotecarios, socios, libros y autores asociados a la biblioteca ID {id_reg}...")
            cur.execute("DELETE FROM bibliotecarios WHERE biblioteca_id=%s;", (id_reg,))
            cur.execute("DELETE FROM socios WHERE biblioteca_id=%s;", (id_reg,))
            cur.execute("DELETE FROM libros WHERE biblioteca_id=%s;", (id_reg,))
            cur.execute("DELETE FROM autores WHERE biblioteca_id=%s;", (id_reg,))
            print("Registros asociados eliminados.")
        elif tabla == 'autores':
            print(f"Eliminando libros asociados al autor ID {id_reg}...")
            cur.execute("DELETE FROM libros WHERE autor_id=%s;", (id_reg,))
            print("Libros asociados eliminados.")
        elif tabla == 'socios':
            print(f"Liberando libros prestados por el socio ID {id_reg}...")
            cur.execute("UPDATE libros SET prestado = FALSE, prestado_a = NULL WHERE prestado_a = %s;", (id_reg,))
            print("Libros prestados actualizados.")
        elif tabla == 'libros':
            print(f"Eliminando libro ID {id_reg}...")
            # No se elimina historial
            print("Libro eliminado.")

        # Ahora elimina el registro principal
        cur.execute(f"DELETE FROM {tabla} WHERE id=%s;", (id_reg,))
        conn.commit()
        print("Registro eliminado correctamente.")
    except Exception as e:
        conn.rollback()
        print(f"Error al eliminar el registro: {e}")
    finally:
        cur.close()
        conn.close()
    input(Fore.YELLOW + "Presiona Enter para volver...")