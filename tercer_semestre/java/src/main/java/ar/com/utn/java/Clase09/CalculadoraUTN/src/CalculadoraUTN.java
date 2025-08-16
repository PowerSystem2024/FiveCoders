import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){//ciclo infinito

            System.out.println("******** Aplicacion Calculadora UTN ********");
            mostrarMenu();//metodo privado

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {

                    ejecutarOperacion(operacion, entrada);//metodo privado con las variables

                }// fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta la proxima amigos");
                    break;//rompe el ciclo y sale
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                    System.out.println();
                }
                //imprimimos un salto de linea antes de repetir el menu
                System.out.println();
            } catch (Exception e){//fin try, comienzo catch
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
        }// fin while
    }//fin main


    private static void mostrarMenu(){
        //mostramos el menu
        System.out.println("""
                    1. Sumar
                    2. Resta
                    3. Multiplicacion
                    4. Division
                    5. Salir
                    """);

        System.out.println("Elegir la operancion a realizar ");
    }//fin metodo mostrarMenu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        Double resultado;
        switch (operacion) {
            case 1 -> {// suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {//resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {// multiplicacion
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicacion: " + resultado);
            }
            case 4 -> {//division
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division: " + resultado);
            }
            default -> System.out.println("Opcion no valida: " + operacion);
        }//fin switch
    }//fin metodo ejecutarOperacion
}//fin clase
