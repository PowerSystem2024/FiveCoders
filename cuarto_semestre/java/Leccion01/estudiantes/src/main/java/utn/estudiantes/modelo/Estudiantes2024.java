package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//boilerplate - Codigo Repetitivo
@Data //Notacion para getters y setters
@NoArgsConstructor //Notacion de constructor vacio
@AllArgsConstructor //Notacion de constructor con todos los argumentos
@ToString // Notacion de el to string
public class Estudiantes2024 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Esta notacion es para llaves auto incrementables
    private Integer idestudiantes2024;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}
