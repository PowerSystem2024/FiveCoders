package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2024;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner { //Vamos a ejecutar nuestra aplicacion por consola
	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class); // Esta configurado en logback-spring.xml

	String nl = System.lineSeparator(); // Salto de linea

	public static void main(String[] args) { // Se ejecuta
		logger.info("Iniciando la aplicacion...");
		SpringApplication.run(EstudiantesApplication.class, args); // levanta fabrica de Spring
		logger.info("Aplicacion Finalizada!");
	}
	// Llama de manera indirecta o automatica a el metodo run
	@Override
	public void run(String... args) throws Exception { // metodo de la implementacion de CommandLineRunner
		logger.info(nl+"Ejecutando el metodo run de Spring..."+nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while (!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}//Fin ciclo while
	}

	private void mostrarMenu(){
		//logger.info(nl);
		logger.info("""
				******* Sistema de Estudiantes *******
				1. Listar Estudiantes
				2. Buscar Estudiante
				3. Agregar Estudiante
				4. Modificar Estudiante
				5. Eliminar Estudiante
				6. Salir
				Elija una opcion: """);
	}

	private boolean ejecutarOpciones(Scanner consola){
		//todo Manejo de errores
		var opcion = 0;
		boolean valido = false;
		while (!valido) {
			try {
				opcion = Integer.parseInt(consola.nextLine());
				valido = true; // Si no da excepcion valido es True
			} catch (NumberFormatException e) {
				logger.info(nl+"Entrada invalida. Debes ingresar un numero entero."+nl+nl);
				mostrarMenu();
			}
		}
		valido = false;

		var salir = false;
		switch (opcion){
			case 1 -> {//Listar estudiantes
				logger.info(nl+"Listado de estudiantes: "+nl);
				List<Estudiantes2024> estudiantes = estudianteServicio.listarEstudiante();
				estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
			}
			case 2 -> {//Buscar estudiante por id
				//todo Manejo de errores
				var idEstudiante = 0;
				while (!valido) {
					try {
						logger.info("Digite el id estudiante a buscar: ");
						idEstudiante = Integer.parseInt(consola.nextLine());
						valido = true;
					} catch (NumberFormatException e) {
						logger.info(nl+"Entrada invalida. Debes ingresar un numero entero."+nl);
					}
				}

				Estudiantes2024 estudiante =
						estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if(estudiante != null)
					logger.info("Estudiante encontrado: "+ estudiante + nl);
				else
					logger.info("Estudiante NO encontrado: "+estudiante + nl);
			}

			case 3 -> {//Agregar estudiante
				logger.info("Agregar estudiante: "+nl);
				logger.info("Nombre: ");
				var nombre = consola.nextLine();
				logger.info("Apellido: ");
				var apellido = consola.nextLine();
				logger.info("Telefono: ");
				var telefono = consola.nextLine();
				logger.info("Email: ");
				var email = consola.nextLine();
				// Crear el objeto estudiante sin el id
				var estudiante = new Estudiantes2024();
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante);
				logger.info("Estudiante agregado: "+estudiante+nl);
			}
			case 4 -> {// Modificar estudiante
				//todo Manejo de errores
				var idEstudiante = 0;
				while (!valido) {
					try {
						logger.info("Modificar estudiante: "+nl);
						logger.info("Ingrese el id estudiante: ");
						idEstudiante = Integer.parseInt(consola.nextLine());
						valido = true;
					} catch (NumberFormatException e) {
						logger.info(nl+"Entrada invalida. Debes ingresar un numero entero."+nl);
					}
				}

				//todo buscamos el estudiante a modificar
				Estudiantes2024 estudiante =
						estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if (estudiante != null){
					logger.info("Nombre: ");
					var nombre = consola.nextLine();
					logger.info("Apellido: ");
					var apellido = consola.nextLine();
					logger.info("Telefono: ");
					var telefono = consola.nextLine();
					logger.info("Email: ");
					var email = consola.nextLine();
					estudiante.setNombre(nombre);
					estudiante.setApellido(apellido);
					estudiante.setTelefono(telefono);
					estudiante.setEmail(email);
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante modificado: "+estudiante+nl);
				}
				else
					logger.info("Estudiante NO encontrado con el id: "+idEstudiante+nl);
			}
			case 5 -> {//Eliminar estudiante
				//todo Manejo de errores
				var idEstudiante = 0;
				while (!valido) {
					try {
						logger.info("Eliminar estudiante: "+nl);
						logger.info("Digite el id estudiante: ");
						idEstudiante = Integer.parseInt(consola.nextLine());
						valido = true;
					} catch (NumberFormatException e) {
						logger.info(nl+"Entrada invalida. Debes ingresar un numero entero."+nl);
					}
				}

				// Buscamos el id estudiante a eliminar
				var estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if (estudiante != null){
					estudianteServicio.eliminarEstudiante(estudiante);
					logger.info("Estudiante eliminado: "+estudiante+nl);
				}
				else
					logger.info("Estudiante NO encontrado con id: "+idEstudiante+nl);
			}
			case 6 -> {//Salir
				logger.info("Hasta pronto!"+nl+nl);
				salir = true;
			}
			default -> logger.info("Opcion no reconocida: "+ opcion+nl);
		}//Fin switch
		return salir;
	} //Fin metodo ejecutarOpciones
} //Fin clase EstudiantesApplication

//todo Ver el catch de error si se ingresa una letra en lugar de un numero en las opciones