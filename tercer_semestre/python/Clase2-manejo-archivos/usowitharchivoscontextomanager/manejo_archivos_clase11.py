from ManejoArchivos_video10_p2 import ManejoArchivos #importamos la clase

#al usar with manda a llamar al método enter
with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
#todo with se usa para gestionar recursos de forma segura y automática
#todo Esto se logra gracias a los context managers, que son objetos que implementan los métodos especiales:
#todo __enter__(self)
#todo __exit__(self, exc_type, exc_value, traceback)