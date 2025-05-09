archivo = open('file.txt', 'r', encoding='utf8')#las letras son: r read(leer), a append(anexa), w write(escribe), x crea un archivo)
#print(archivo.read()) nos lee el archivo completo
#print(archivo.read(16))
#print(archivo.read(10)) #continuamos desde la línea anterior
print(archivo.readline())
print(archivo.readline()) #por cada archivo.readline() que coloquemos imprimirá una línea del archivo
#todo durante el video clase2 (1.3 Lectura de archivos)  parte 7, el profesor muestra cómo buscar archivos en una ruta diferente
#ejemplo
#archivo2 = open('C:\Users\Jona\Documents\UTN-TUP-2025-PYTHON\FiveCoders\python\Clase2-manejo-archivos\lecturaarchivos.file.txt', 'r')