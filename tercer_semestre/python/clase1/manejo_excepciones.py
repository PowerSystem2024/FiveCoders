try:
    10/0
except Exception as e:
    print(f'Ocurrió un error: {e}')


try:
    5/0
except ZeroDivisionError as z:  #excepción específica
    print(f'Ocurrió un error: {z}')