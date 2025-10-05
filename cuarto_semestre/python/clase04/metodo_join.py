#help(str.join)
tupla_str = ('Hola', 'estudiantes', 'Tecnicatura', 'Universitaria')
mensaje = ' '.join(tupla_str)
print(f'Mensaje: {mensaje}')

lista_cursos = ['Java', 'Python', 'Angular', 'Spring']
mensaje = ' , '.join(lista_cursos)
print(f'Mensaje: {mensaje}')

cadena = 'HolaMundo'
mensaje = '.'.join(cadena)
print(f'Mensaje: {mensaje}')

diccionario = {'nombre': 'Five', 'apellido': 'Coders', 'edad': '178'}
llaves = '-'.join(diccionario.keys()) #acá deja de ser un diccionario por el uso join
valores = '-'.join(diccionario.values())  #acá deja de ser un diccionario por el uso join
print(f'Llaves: {llaves}, Type: {type(llaves)}')
print(f'Valores: {valores}, Type: {type(valores)}')