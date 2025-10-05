#help(str.capitalize)
mensaje1 = 'hola mundo'
mensaje2 = mensaje1.capitalize() # capitalize crea una nueva variable
print(f'Mensaje1: {mensaje1}, id:{id(mensaje1)}')
print(f'Mensaje2: {mensaje2}, id:{id(mensaje2)}')

mensaje1 += 'Adios'
print(f'Mensaje1: {mensaje1}, id: {id(mensaje1)}')

'''
Los tipos String son inmutables, cada vez que queremos modificar una cadena , en realidad se está generando una nueva cadena
'''