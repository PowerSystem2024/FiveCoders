class Persona:
    def __init__(self, id_persona=None, nombre=None, apellido=None, email=None):
        self._id_persona = id_persona
        self._nombre = nombre
        self._apellido = apellido
        self._email = email

    @property
    def id_persona(self):
        return self._id_persona

    @id_persona.setter
    def id_persona(self, valor):
        self._id_persona = valor

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, valor):
        self._nombre = valor

    @property
    def apellido(self):
        return self._apellido

    @apellido.setter
    def apellido(self, valor):
        self._apellido = valor

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, valor):
        self._email = valor

    def __str__(self):
        return f'Persona[{self._id_persona}, {self._nombre}, {self._apellido}, {self._email}]'