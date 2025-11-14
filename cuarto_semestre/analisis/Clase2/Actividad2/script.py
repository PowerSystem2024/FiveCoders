# Definimos la clase Auto
class Auto:
    def __init__(self, marca, color):
        self.marca = marca
        self.color = color

    def mostrarDatos(self):
        print(f"Marca: {self.marca}, Color: {self.color}")

# Creamos instancias de la clase Auto
auto1 = Auto("Ford", "rojo")
auto2 = Auto("Toyota", "azul")

# Mostramos los datos de los autos
auto1.mostrarDatos()
auto2.mostrarDatos()