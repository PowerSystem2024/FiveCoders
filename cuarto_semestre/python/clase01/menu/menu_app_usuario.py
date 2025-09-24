from cuarto_semestre.python.clase01.dao.usuario_dao import UsuarioDAO
from cuarto_semestre.python.clase01.entidad.usuario import Usuario
from cuarto_semestre.python.clase01.logg.logger_base import log

opcion = None  # La inicializamos en None
try:
    while opcion != 5:
        print('Opciones: ')
        print('1. Listar Usuarios')
        print('2. Agregar Usuario')
        print('3. Modificar Usuario')
        print('4. Eliminar Usuario')
        print('5. Salir')
        opcion = int(input('Digite la opción (1-5): '))  # convertimos a un entero lo que recibimos como una cadena
        if opcion == 1:
            usuarios = UsuarioDAO.seleccionar()
            for usuario in usuarios:
                log.info(usuario)
        elif opcion == 2:
            username_var = input('Digite el nombre de usuario: ')  # variable temporal para capturar valor ingresado
            password_var = input('Digite la contraseña: ')  # variable temporal para capturar valor ingresado
            usuario = Usuario(username=username_var, password=password_var)
            usuario_insertado = UsuarioDAO.insertar(usuario)
            log.info(f'Usuario insertado: {usuario_insertado}')
        elif opcion == 3:
            id_usuario_var = int(input('Digite el id del usuario a modificar: '))
            username_var = input('Digite el nombre del usuario a modificar: ')
            password_var = input('Digite la contraseña del usuario a modificar: ')
            usuario = Usuario(id_usuario=id_usuario_var, username=username_var, password=password_var)
            usuario_actualizado = UsuarioDAO.actualizar(usuario)
            log.info(f'Usuario actualizado: {usuario_actualizado}')
        elif opcion == 4:
            id_usuario_var = int(input('Digite el id del usuario a eliminar: '))
            usuario = Usuario(id_usuario=id_usuario_var)
            usuario_eliminado = UsuarioDAO.eliminar(usuario)
            log.info(f'Usuario eliminado: {usuario_eliminado}')
        else:
            log.info('Salimos de la aplicación , Hasta pronto!!!')
except:
    print(f'El valor ingresado no corresponde a una opción')
