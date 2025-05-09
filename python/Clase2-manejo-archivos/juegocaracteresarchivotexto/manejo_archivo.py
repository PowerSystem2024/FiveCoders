#declaramos una variable
try:
    archivo = open('prueba2.txt', 'w',encoding='utf8') # agregamos encoding ='utf8' para configurar  el juego de caracteres que soporta las tildes
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Las tildes son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:
    archivo.close()#Con esto se debe cerrar el archivo
#ejemplificamos a continuación un error
#archivo.write('Todo quedó perfecto'):esto es la ejemplificación de un error al querer escribir un archivo ya cerrado