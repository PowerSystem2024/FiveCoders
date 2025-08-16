from dominio.Pelicula import Pelicula
from servicio.CatalogoPeliculas import CatalogoPeliculas


def mostrar_menu():
    print("\n🎬 Catálogo de Películas")
    print("1) Agregar película")
    print("2) Listar películas")
    print("3) Eliminar archivo de películas")
    print("4) Salir")

def ejecutar():
    opcion = ''
    while opcion != '4':
        mostrar_menu()
        opcion = input("Seleccione una opción: ")
        if opcion == '1':
            nombre = input("Ingrese el nombre de la película: ")
            pelicula = Pelicula(nombre)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == '2':
            CatalogoPeliculas.listar_peliculas()
        elif opcion == '3':
            CatalogoPeliculas.eliminar()
        elif opcion == '4':
            print("Saliendo del programa...")
        else:
            print("Opción no válida. Intente de nuevo.")

if __name__ == '__main__':
    print("¡Bienvenido al catálogo de Películas")
    ejecutar()