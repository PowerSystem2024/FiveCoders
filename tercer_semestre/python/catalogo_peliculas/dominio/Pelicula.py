class Pelicula:
 def __init__(self, nombre: str):
  self.__nombre = nombre

 @property
 def nombre(self) ->str:
  return self.__nombre

 #Representación objeto
 def __str__(self) -> str:
  return f'Película: {self.__nombre}'