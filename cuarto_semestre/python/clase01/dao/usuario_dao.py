from cuarto_semestre.python.clase01.entidad.usuario import Usuario
from cuarto_semestre.python.clase01.db.cursor_del_pool import CursorDelPool
from cuarto_semestre.python.clase01.logg.logger_base import log


class UsuarioDAO:
    """
    DAO -> Data Access Object Para la tabla de usuario
    CRUD -> Create - Read - Update - Delete
    """

    _SELECT = 'SELECT * FROM usuario ORDER BY id_usuario' #seleccionamos para listar todos los elementos de la base de datos
    _INSERTAR = 'INSERT INTO usuario(username, password) VALUES (%s, %s)' # Insertamos un nuevo registro- trabajamos con parámetros posicionales %s -
    _ACTUALIZAR = 'UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s' #actualizamos un registro
    _ELIMINAR = 'DELETE FROM usuario WHERE id_usuario=%s' #sentencia para eliminar un registro

    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            log.debug('Seleccionando usuarios')
            cursor.execute(cls._SELECT)
            registros = cursor.fetchall()
            usuarios = []
            for registro in registros:
                usuario = Usuario(registro[0], registro[1], registro[2])
                # Se agrega el objeto 'usuario' a la lista 'usuarios'
                usuarios.append(usuario)
            return usuarios

    @classmethod
    def insertar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a insertar: {usuario}')
            valores = (usuario.username, usuario.password)
            cursor.execute(cls._INSERTAR, valores)
            return cursor.rowcount

    @classmethod
    def actualizar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a actualizar: {usuario}') #mostramos el usuario
            valores = (usuario.username, usuario.password, usuario.id_usuario) #valores a actualizar
            cursor.execute(cls._ACTUALIZAR, valores)
            return cursor.rowcount

    @classmethod
    def eliminar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a eliminar: {usuario}')
            # Se espera una tupla, por eso la coma final
            valores = (usuario.id_usuario,) #la coma final nos indica que es una tupla
            cursor.execute(cls._ELIMINAR, valores)
            return cursor.rowcount

#esto es para poder ejecutar/probar desde el mismo archivo
if __name__ == '__main__':
    # --- PRUEBA DE ELIMINAR ---
    usuario = Usuario(id_usuario=3)
    usuario_eliminado = UsuarioDAO.eliminar(usuario)
    log.debug(f'Usuarios eliminados: {usuario_eliminado}')

    # --- PRUEBA DE ACTUALIZAR ---
    usuario = Usuario(id_usuario=1, username='', password='369')
    usuario_modificado = UsuarioDAO.actualizar(usuario)
    log.debug(f'Usuarios modificados: {usuario_modificado}')

    # --- PRUEBA DE INSERTAR ---
    usuario = Usuario(username='Kely', password='321')
    usuario_insertado = UsuarioDAO.insertar(usuario)
    log.debug(f'Usuarios insertados: {usuario_insertado}')

    # --- PRUEBA DE SELECCIONAR ---
    usuarios = UsuarioDAO.seleccionar()
    for usuario in usuarios:
        log.debug(usuario)