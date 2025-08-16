from numeros_iguales_exception import NumerosIgualesException

resultado = None
a = 10
b = 5
try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise NumerosIgualesException('son números iguales')
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print("No se arrojó ninguna excepción")
finally: #siempre se va a ejecutar este bloque
    print("Ejecución de este bloque finally")
print(f'El resultado es: {resultado}')
print('seguimos...')