package UTN;

import UTN.conexion.Conexion;
import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.List;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        var salir = false;
        //Se crea una instancia de la clase servicio, esto lo hacemos fuera del ciclo
        var estudianteDao = new EstudianteDAO();

        //Empezamos con el menu
        while (!salir) {
            try {
                // Mostrar menu
                mostrarMenu();
                //Este sera el metodo ejercutarOpcion que devolvera un booleano
                salir = ejecutarOperacion(entrada, estudianteDao); //Este arroja una exception
            }catch (Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }
    } // Fin main

    private static void mostrarMenu(){
        //Mostramos las opciones
        System.out.println("""
                *** Sistema de Estudiantes ***
                1. Listar estudiantes
                2. Buscar estudiante
                3. Agregar estudiante
                4. Modificar estudiante
                5. Eliminar estudiante
                6. Salir
                Elige una opcion:
                """);
    } // Fin mostrarMenu

    //Metodo para ejecutar las opciones, va a regresar un valor booleano, ya que es el que
    //puede modificar el valor de la variable salir, si es verdadero termina el ciclo while
    private static boolean ejecutarOperacion(Scanner entrada, EstudianteDAO estudianteDao){
        //Elegir opcion
        var opcion = Integer.parseInt(entrada.nextLine());
        System.out.println();
        var salir = false;
        switch (opcion){
            case 1 -> {
                //Listar
                System.out.println("** Lista de Estudiante **");
                // no muestra la informacion, solo recupera la info y regresa una lista
                List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();// recibe el listado
                //vamos a iterar cada objeto de tipo estudiante
                estudiantes.forEach(System.out::println); // para imprimir lista
                return salir;
            }//Fin caso 1

            case 2 -> {
                //Buscar por id
                System.out.println("** Buscar un Estudiante **");
                System.out.println("Ingresar el id del estudiante a buscar: ");
                int idEstudiante = Integer.parseInt(entrada.nextLine());
                var estudianteBuscado = new Estudiante(idEstudiante);
                var encontrado = estudianteDao.buscarEstudiantePorId(estudianteBuscado);
                if (encontrado)
                    System.out.println("Estudiante encontrado: " + estudianteBuscado);
                else
                    System.out.println("No se encontro el estudiante: " + estudianteBuscado.getIdEstudiante());
                return salir;
            }//Fin caso 2

            case 3 -> {
                //Agregar
                System.out.println("** Agregar un Estudiante **");
                System.out.println("Ingresar el nombre: ");
                String nombre = entrada.nextLine();
                System.out.println("Ingresar el apellido: ");
                String apellido = entrada.nextLine();
                System.out.println("Ingresar el telefono: ");
                String telefono = entrada.nextLine();
                System.out.println("Ingresar el email: ");
                String email = entrada.nextLine();

                var nuevoEstudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
                if (agregado) {
                    System.out.println("Estudiante agregado: " + nuevoEstudiante);
                } else {
                    System.out.println("No se ha agregado estudiante: " + nuevoEstudiante);
                }
            }//Fin caso 3

            case 4 -> {//Modificar
                System.out.println("** Modificar un Estudiante **");
                System.out.println("Ingresar el id del estudiante a modificar: ");
                int idModificar = Integer.parseInt(entrada.nextLine());
                System.out.println("Ingresar el nombre: ");
                String nombreModificar = entrada.nextLine();
                System.out.println("Ingresar el apellido: ");
                String apellidoModificar = entrada.nextLine();
                System.out.println("Ingresar el telefono: ");
                String telefonoModificar = entrada.nextLine();
                System.out.println("Ingresar el email: ");
                String emailModificar = entrada.nextLine();
                var estudianteModificado = new Estudiante(idModificar, nombreModificar, apellidoModificar, telefonoModificar, emailModificar);
                var modificado = estudianteDao.modificarEstudiante(estudianteModificado);
                if (modificado) {
                    System.out.println("Estudiante modificado: " + estudianteModificado);
                } else {
                    System.out.println("No se modifico el estudiante: " + estudianteModificado);
                }
            }// Fin caso 4

            case 5 -> {
                //Eliminar
                System.out.println("** Eliminar un Estudiante **");
                System.out.println("Ingresar id del estudiante a eliminar: ");
                int idEliminar = Integer.parseInt(entrada.nextLine());
                var estudianteEliminar = new Estudiante(idEliminar);
                var eliminado = estudianteDao.eliminarEstudiante(estudianteEliminar);
                if (eliminado)
                    System.out.println("Estudiante eliminado: " + estudianteEliminar);
                else
                    System.out.println("No se elimino estudiante: " + estudianteEliminar);
            }// Fin caso 5

            case 6 -> {
                //Salir
                System.out.println("** Fin del Programa **");
                return salir = true;
            }// Fin caso 6

            default -> System.out.println("¡¡ Opcion no valida !!");
        }

        return salir;
    }

}// Fin clase