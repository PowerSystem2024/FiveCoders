import os

from dominio import Pelicula


class CatalogoPeliculas:
    """
    Gestiona las operaciones sobre el archivo de películas (peliculas.txt).

    Esta clase utiliza métodos estáticos ya que las operaciones
    se realizan a nivel de clase sobre un archivo compartido,
    no sobre instancias específicas del catálogo.
    """

    # Atributo de clase (estático en UML)
    ruta_archivo: str = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(pelicula: Pelicula):
        """
        Agrega una película al archivo.

        Args:
            pelicula (Pelicula): El objeto Pelicula a agregar.
        """
        try:
            # 'a' es modo append (agregar al final), crea el archivo si no existe
            # encoding='utf8' es importante para manejar acentos y caracteres especiales
            with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf8') as archivo:
                archivo.write(f"{pelicula.nombre}\n")
            print(f"Película '{pelicula.nombre}' agregada correctamente.")
        except Exception as e:
            print(f"Error al agregar película: {e}")

    @staticmethod
    def listar_peliculas():
        """Lee y muestra las películas del archivo."""
        try:
            # 'r' es modo lectura
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf8') as archivo:
                print("----- Listado de Películas -----")
                contenido = archivo.read()
                if contenido:
                    print(contenido)
                else:
                    print("El catálogo está vacío.")
                print("-------------------------------")
        except FileNotFoundError:
            print("El archivo del catálogo aún no existe. Agregue una película primero.")
        except Exception as e:
            print(f"Error al listar películas: {e}")

    @staticmethod
    def eliminar():
        """Elimina el archivo físico del catálogo de películas."""
        try:
            os.remove(CatalogoPeliculas.ruta_archivo)
            print(f"Archivo '{CatalogoPeliculas.ruta_archivo}' eliminado correctamente.")
        except FileNotFoundError:
            print("El archivo del catálogo no existe, no se puede eliminar.")
        except Exception as e:
            print(f"Error al eliminar el archivo: {e}")