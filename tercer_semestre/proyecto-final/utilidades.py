import hashlib
import os
from colorama import Fore, Style, init

init(autoreset=True)

from conexion import obtener_conexion

def hash_password(password: str) -> str:
    """Devuelve el hash SHA-256 de la contraseña."""
    return hashlib.sha256(password.encode('utf-8')).hexdigest()

def limpiar_pantalla():
    os.system('clear' if os.name == 'posix' else 'cls')

def print_titulo(titulo):
    print(Fore.CYAN + "---" + "---" * len(titulo) + "---")
    print(Fore.CYAN + f"  {titulo}  ")
    print(Fore.CYAN + "---" + "---" * len(titulo) + "---" + Style.RESET_ALL)

def obtener_nombre_biblioteca(biblioteca_id):
    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("SELECT nombre FROM bibliotecas WHERE id=%s;", (biblioteca_id,))
    resultado = cur.fetchone()
    cur.close()
    conn.close()
    return resultado[0] if resultado else "Desconocida"