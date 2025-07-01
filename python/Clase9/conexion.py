import psycopg2
from logger_base import log

class Conexion:
    _DATABASE = 'nombre_bd'
    _USERNAME = 'usuario'
    _PASSWORD = 'contraseña'
    _DB_PORT = '5432'
    _HOST = 'localhost'
    _conexion = None
    _cursor = None

    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = psycopg2.connect(
                    database=cls._DATABASE,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DB_PORT,
                    host=cls._HOST
                )
                log.info('Conexión exitosa')
                return cls._conexion
            except Exception as e:
                log.error(f'Error al conectar: {e}')
                raise
        return cls._conexion

    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            cls._cursor = cls.obtenerConexion().cursor()
        return cls._cursor