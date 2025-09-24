package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiantes2024;
import utn.estudiantes.repositorio.EstudianteRepositorio;

import java.util.List;

//Clase de componente tipo service
@Service // Notacion para que spring reconozca e inyecte dependencias en esta clase
public class EstudianteServicio implements IEstudianteServicio {
    @Autowired // Apunta a un atributo que queremos que se inyecte en automatico
    private EstudianteRepositorio estudianteRepositorio;

    @Override
    public List<Estudiantes2024> listarEstudiante() { // Este metodo recupera todos los objetos de tipo "Estudiante" y los devuelve
        List<Estudiantes2024> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }

    @Override
    public Estudiantes2024 buscarEstudiantePorId(Integer idEstudiantes2024) {
        Estudiantes2024 estudiantes = estudianteRepositorio.findById(idEstudiantes2024).orElse(null); // Devuelve el estudiante o null
        return estudiantes;
    }

    @Override
    public void guardarEstudiante(Estudiantes2024 estudiantes) {
        estudianteRepositorio.save(estudiantes); //Guarda el estudiante que reciba, si es una insercion o una actualizacion
    }

    @Override
    public void eliminarEstudiante(Estudiantes2024 estudiantes) {
        estudianteRepositorio.delete(estudiantes); //Elimina al estudiante ingresado
    }
}
