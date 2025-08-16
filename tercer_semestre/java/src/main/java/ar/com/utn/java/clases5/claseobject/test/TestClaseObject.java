package ar.com.utn.java.clases5.claseobject.test;


import ar.com.utn.java.clases5.claseobject.domain.Empleado;

public class TestClaseObject {
    public static void main(String[] args) {

        Empleado empleado1 = new Empleado("Juan", 5000);//la palabra reservada new lo que hace es generar una nueva solicitud de referencia en memoria
        Empleado empleado2 = new Empleado("Juan", 5000);

        if(empleado1 == empleado2){
            System.out.println("Tienen la misma referencia en memoria");
        }else{
            System.out.println("Tienen distinta referencia en memoria");
        }
        if (empleado1.equals(empleado2)) {
            System.out.println("Los objetos son iguales en contenido");
        }else{
            System.out.println("Los objetos son distintos en contenido");
        }
        if(empleado1.hashCode() == empleado2.hashCode()){
            System.out.println("El valor haschCode es igual ");
        }else{
            System.out.println("El valor hashCode es diferente");
        }
    }
}
