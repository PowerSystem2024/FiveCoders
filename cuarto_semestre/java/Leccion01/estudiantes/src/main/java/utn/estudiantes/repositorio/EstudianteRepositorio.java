package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2024;

// Al hacer esta interface ya tenemos todas las funcionalidades del EstudianteDAO hecha anteriormente
public interface EstudianteRepositorio extends JpaRepository<Estudiantes2024, Integer > {
}
