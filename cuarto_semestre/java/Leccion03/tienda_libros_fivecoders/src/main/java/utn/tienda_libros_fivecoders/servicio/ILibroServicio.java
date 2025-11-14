package utn.tienda_libros_fivecoders.servicio;

import utn.tienda_libros_fivecoders.modelo.Libro;

import java.util.List;

public interface ILibroServicio {

    List<Libro> listarLibros();
    Libro buscarLibroPorId(Integer idLibro);
    void guardarLibro(Libro libro);
    void eliminarLibro(Libro libro);
}
