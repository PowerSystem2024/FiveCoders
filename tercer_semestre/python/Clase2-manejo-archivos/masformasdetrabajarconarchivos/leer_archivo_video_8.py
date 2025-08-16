archivo = open('file.txt' , 'r', encoding='utf8')
#vamos a iterar el archivo, cada una de las letras

    # print(linea): itereamos todos los elementos del archivo
print(archivo.readlines()[4]) #accedemos al archivo como si fuera una lista, por posición (desde cero en python)

#todo , De la siguiente manera usamos el for para recorrer línea por línea los archivos python
#for linea in archivo:
 #   print(linea)