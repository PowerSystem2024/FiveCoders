package ar.com.utn.java.clases5.conversionobjetos.test;


import ar.com.utn.java.clases5.conversionobjetos.domain.Empleado;
import ar.com.utn.java.clases5.conversionobjetos.domain.Escritor;
import ar.com.utn.java.clases5.conversionobjetos.domain.TipoEscritura;

public class TestConversionObjetos {

    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("Empleado = " + empleado);
        //System.out.println(empleado.obtenerDetalles());//si quereemos acceder a métodos Escritor
        //downcasting
        // ((Escritor)empleado).getTipoEscritura(); //tenemos dos opciones; esta es una
        Escritor escritor = (Escritor) empleado;
        escritor.getTipoEscritura();

        //Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
