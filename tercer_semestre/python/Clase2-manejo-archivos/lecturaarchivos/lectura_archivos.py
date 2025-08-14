try:
 archivo = open('../juegocaracteresarchivotexto/prueba2.txt', 'r', encoding='utf8')
 #print(archivo.read()) nos lee toda la información del archivo al ejecutar el programa
 archivo.write('Las tildes son importantes para las palabras\n')
 archivo.write('Como por ejemplo: acción, ejecución y producción\n')
 archivo.write('las letras son: \nr read leer, \na append anexa, \nw write escribe, \nx crea un archivo')
 archivo.write('\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n' )
 archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally: #siempre se va a ejecutar
    archivo.close() # Con esto se debe cerrar el archivo
#todo finalicé clase 5