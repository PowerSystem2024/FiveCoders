#split es separar/dividir
#convertimos una cadena a una lista -

cursos = 'Java Javascript Node Python Diseño'
lista_cursos = cursos.split()
print(f'Lista de cursos: {lista_cursos}')

cursos_separados_coma = 'Java,Javascript,Node,Python,Diseño' #como busca por default espacios, solo va a generar un elemento dentro de la lista
lista_cursos = cursos_separados_coma.split()
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))

cursos_separados_coma = 'Java,Javascript,Node,Python,Diseño'
lista_cursos = cursos_separados_coma.split(',')
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))

cursos_separados_coma = 'Java,Javascript,Node,Python,Diseño'
lista_cursos = cursos_separados_coma.split(',', 2) # maxplit: número de veces que se separa la cadena
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))