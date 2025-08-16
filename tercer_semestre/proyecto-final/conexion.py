import psycopg2
from config import CONFIG_BD
from colorama import Fore, Style, init

init(autoreset=True)

def obtener_conexion():
    """Devuelve un objeto de conexión a la base de datos."""
    return psycopg2.connect(**CONFIG_BD)

def inicializar_bd():
    """Crea las tablas si no existen."""
    comandos = [
        # Bibliotecas
        """CREATE TABLE IF NOT EXISTS bibliotecas (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(100) NOT NULL,
            ubicacion VARCHAR(100),
            direccion TEXT,
            email VARCHAR(100),
            telefono VARCHAR(20),
            directivo VARCHAR(100)
        );""",
        # Autores
        """CREATE TABLE IF NOT EXISTS autores (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            apellido VARCHAR(50) NOT NULL,
            pais VARCHAR(50),
            biblioteca_id INTEGER REFERENCES bibliotecas(id)
        );""",
        # Bibliotecarios
        """CREATE TABLE IF NOT EXISTS bibliotecarios (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            apellido VARCHAR(50) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            clave_hash VARCHAR(64) NOT NULL,
            biblioteca_id INTEGER REFERENCES bibliotecas(id),
            es_admin BOOLEAN DEFAULT FALSE
        );""",
        # Socios
        """CREATE TABLE IF NOT EXISTS socios (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            apellido VARCHAR(50) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            clave_hash VARCHAR(64) NOT NULL,
            biblioteca_id INTEGER REFERENCES bibliotecas(id),
            libros_prestados INTEGER[] DEFAULT '{}'
        );""",
        # Libros
        """CREATE TABLE IF NOT EXISTS libros (
            id SERIAL PRIMARY KEY,
            titulo VARCHAR(200) NOT NULL,
            autor_id INTEGER REFERENCES autores(id),
            isbn VARCHAR(20) UNIQUE,
            biblioteca_id INTEGER REFERENCES bibliotecas(id),
            prestado BOOLEAN DEFAULT FALSE,
            prestado_a INTEGER
        );"""
    ]

    try:
        conn = obtener_conexion()
        cur = conn.cursor()
        for sql in comandos:
            cur.execute(sql)
        conn.commit()
        cur.close()
        conn.close()
        print(Fore.GREEN + "Tablas creadas o verificadas correctamente." + Style.RESET_ALL)
    except Exception as e:
        print(Fore.RED + f"Error al inicializar la base de datos: {e}" + Style.RESET_ALL)