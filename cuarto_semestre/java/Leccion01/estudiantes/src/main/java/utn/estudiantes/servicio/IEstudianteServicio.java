package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiantes2024;

import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiantes2024> listarEstudiante();
    public Estudiantes2024 buscarEstudiantePorId(Integer idEstudiante2024);
    public void guardarEstudiante(Estudiantes2024 estudiante);
    public void eliminarEstudiante(Estudiantes2024 estudiante);
}
