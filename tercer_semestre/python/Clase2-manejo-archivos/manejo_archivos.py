# Declaramos una variable
#hay que tener en cuenta la identación para que el bloque esté dentro del try
#es importante manejar errores cuando se trabaja con archivos
try:
    archivo = open('prueba.txt','w',encoding='utf8') # w = write (escribir), el método open busca el archivo y si no lo encuentra, lo crea
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n') #\n = salto de línea , write: nos  permite escribir el archivo
    archivo.write('Las tildes son importantes para las palabras \n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('las letras son: \nr read(leer), \na append(anexa), \nw write(escribe),\nx crea un archivo)')
    archivo.write('\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe, \n')
    archivo.write('')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally: #siempre se ejecuta
    archivo.close() #cerramos el archivo pase lo que pase (hayamos accedido a él o no, de cualquier manera se va a cerrar)
#archivo.write('todo quedó perfecto'): esto es un error , no puede escribir un archivo que ya fue cerrado