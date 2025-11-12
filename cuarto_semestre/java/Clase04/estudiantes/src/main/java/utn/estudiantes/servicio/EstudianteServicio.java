package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiante;
import utn.estudiantes.repositorio.EstudianteRepositorio;

import java.util.List;

//Clase de componente tipo service
@Service // Notacion para que spring reconozca e inyecte dependencias en esta clase
public class EstudianteServicio implements IEstudianteServicio {
    @Autowired // Apunta a un atributo que queremos que se inyecte en automatico
    private EstudianteRepositorio estudianteRepositorio;

    @Override
    public List<Estudiante> listarEstudiante() { // Este metodo recupera todos los objetos de tipo "Estudiante" y los devuelve
        List<Estudiante> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }

    @Override
    public Estudiante buscarEstudiantePorId(Integer idEstudiante) {
        Estudiante estudiante = estudianteRepositorio.findById(idEstudiante).orElse(null); // Devuelve el estudiante o null
        return estudiante;
    }

    @Override
    public void guardarEstudiante(Estudiante estudiante) {
        estudianteRepositorio.save(estudiante); //Guarda el estudiante que reciba, si es una insercion o una actualizacion
    }

    @Override
    public void eliminarEstudiante(Estudiante estudiante) {
        estudianteRepositorio.delete(estudiante); //Elimina al estudiante ingresado
    }
}
