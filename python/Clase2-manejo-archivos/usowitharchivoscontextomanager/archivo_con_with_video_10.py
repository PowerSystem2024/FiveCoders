#al usar with abre el archivo y lo cierra , todo lo hace automático
with open('prueba.txt', 'r', encoding='utf8') as archivo:
    print(archivo.read())
# No hace falta ni el try ni el finally
# en el contexto de with lo que se ejecuta de manera automática
# Utilizar diferentes métodos: __enter__ este es el que abre
# Ahora el siguiente método es el que cierra: __exit__