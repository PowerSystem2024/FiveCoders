#tipo nan puede ser resultado también de una operación matemática
import math
from decimal import Decimal

#NaN (Not a Number)
a = float('nan') #el valor que le pasemos no es sensible a mayúsculas o minúsculas
print(f'a: {a}')

#Módulo math
a = float('nan')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')

a = Decimal('Nan')
print(f'Es de tipo Nan(Not a Number)?: {math.isnan(a)}')