class Usuario:
    """Clase que representa a un usuario en el sistema"""

    #Método constructor para inicializar objetos de tipo Usuario -  Self: referencia al objeto(Usuario) que se está creando
    # None: los hace opcionales
    def __init__(self, id_usuario=None , username=None, password=None):
        self._id_usuario = id_usuario
        self._username = username
        self._password = password

    def __str__(self):#definimos lo que queremos mostrar como cadena acerca del objeto
        return f'Usuario: {self._id_usuario} {self._username} {self._password}'

    #Métodos Get y Set
    @property
    def id_usuario(self):#método getter
        return self._id_usuario

    @id_usuario.setter #método setter
    def id_usuario(self, id_usuario):
        self._id_usuario = id_usuario

    @property #método getter
    def username(self):
        return self._username

    @username.setter
    def username(self, username):
        self._username = username

    @property
    def password(self): #método getter
        return self._password

    @password.setter
    def password(self, password):
        self._password = password