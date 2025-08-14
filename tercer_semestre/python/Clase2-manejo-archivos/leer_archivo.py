try:
     archivo = open('prueba.txt','r', encoding='utf8') #las letras son: r read(leer), a append(anexa), w write(escribe), x crea un archivo)
     print(archivo.read())
except Exception as e:
     print(e)
finally:
     archivo.close()
