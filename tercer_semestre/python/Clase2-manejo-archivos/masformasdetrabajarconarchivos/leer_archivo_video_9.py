try:
    archivo = open('prueba.txt', 'r', encoding='utf8')
    #anexamos información, copiamos a otro
    archivo2 = open('copia.txt', 'a', encoding='utf8')
    archivo2.write(archivo.read())
    archivo.close()
    archivo2.close()
    print('se ha terminado el proceso de leer y copiar archivos')
except Exception as e:
    print(e)