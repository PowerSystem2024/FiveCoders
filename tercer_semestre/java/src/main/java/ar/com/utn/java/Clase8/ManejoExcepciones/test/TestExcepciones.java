package test;

import excepciones.OperacionesExcepcion;

import static aritmetica.Aritmetica.division;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try {
            resultado = division(10, 0);
        } catch (OperacionesExcepcion e) {
            System.out.println("Ocurrio un Error de tipo OperacionExcepcion");
            System.out.println(e.getMessage());
        } catch(Exception e){
            System.out.println("Ocurrio un Error");
            e.printStackTrace(System.out); //se conoce como la pila de excepciones
            System.out.println(e.getMessage());
        }
        finally {
            System.out.println("Se reviso la division entre cero");
        }
        System.out.println("La variable de resultado tiene el valor de " + resultado);


    }
}
