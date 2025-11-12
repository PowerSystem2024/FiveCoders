package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.servicio.EstudianteServicio;

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
	}
}
