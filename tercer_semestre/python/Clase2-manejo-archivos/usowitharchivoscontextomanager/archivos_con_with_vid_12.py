from ManejoArchivos_video10_p2 import ManejoArchivos

# MANEJO DE CONTEXTO WITH: Sintaxis simplificada , abre y cierra el archivo
# with open('prueba.txt', 'r', encoding='utf8' as archivo:
   #print(archivo.read())
# No hace falta ni el try, ni el finally
# Utiliza diferentes métodos: __enter__ este es el que abre
# Ahora el siguiente método es el que cierra: __exit__

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read());