#Bool contiene los valores True y False
# Los tipos numéricos, es false para 0 (cero) , true para los demás valores

valor = 0 # cero siempre es false
resultado = bool(valor)
print(f'valor: {valor} , Resultado: {resultado}')

valor = 0.1
resultado = bool(valor)
print(f'valor: {valor} , Resultado: {resultado}')

#Tipo string -> False '' ( para cadena vacía), True para los demás valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor} , Resultado: {resultado}')

valor = 'Hola Fivecoders'
resultado = bool(valor)
print(f'valor: {valor} , Resultado: {resultado}')

# Tipo colecciones -> False para colecciones vacías
# Tipo colecciones -> True para todas las demás
# Lista

valor = [] #lista vacía
resultado = bool(valor)
print(f'valor de una Lista vacía: {valor} , Resultado: {resultado}')

valor = [2,3,4]
resultado = bool(valor)
print(f'valor de una Lista con elementos: {valor} , Resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor tupla vacía: {valor} , Resultado: {resultado}')

valor = (5 ,)
resultado = bool(valor)
print(f'valor tupla con elementos: {valor} , Resultado: {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor diccionario vacío: {valor} , Resultado: {resultado}')

valor = {'Nombre' : 'Five', 'Apellido': 'Coders'}
resultado = bool(valor)
print(f'valor diccionario con elementos: {valor} , Resultado: {resultado}')

# Sentencias de control con bool
if '': #podemos pasar la cadena directamente
    print('Regresa verdadero cuando el tipo string tiene valores')
else:
    print('Regresa falso si el tipo string tiene cadena vacía')

if bool('Fivecoders'): #podemos utilizar el constructor bool
    print('Regresa verdadero cuando el tipo string tiene valores')
else:
    print('Regresa falso si el tipo string tiene cadena vacía.')

controlDiccionarioVacio = {}
if bool(controlDiccionarioVacio):
    print(f'Retorno True para el valor: {controlDiccionarioVacio}')
else:
    print(f'Retorno False para el valor: {controlDiccionarioVacio}')

# Ciclos
variable = 17 # cargo variable con valor
while variable:
    print('Regresa verdadero si tiene valor la variable')
    break
else:
    print('Regresa falso cuando no tiene valor la variable o es cero')

variable = 0 # cargo variable con cero
while variable:
    print('Regresa verdadero si tiene valor la variable')
    break
else:
    print('Regresa falso cuando no tiene valor la variable o es cero')