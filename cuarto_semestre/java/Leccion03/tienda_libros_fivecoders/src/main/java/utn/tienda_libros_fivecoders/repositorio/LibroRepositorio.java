package utn.tienda_libros_fivecoders.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.tienda_libros_fivecoders.modelo.Libro;

public interface LibroRepositorio extends JpaRepository<Libro, Integer > {
}
