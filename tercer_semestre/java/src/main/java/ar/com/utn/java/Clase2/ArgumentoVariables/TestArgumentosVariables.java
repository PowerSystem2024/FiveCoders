package ar.com.utn.java.Clase2.ArgumentoVariables;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3,4,5);
        imprimirNumeros(1,2);

        variosParametros("Santiago", "Seleme",5, 6, 8, 9);
        variosParametros("Juan", "Perez",7, 6);
    }

    private static void variosParametros(String nombre, String apellido, int ...numeros){ // Si usamos argumentos no variables y variables juntos, los variables deberan colocarse ultimos
        System.out.println("Nombre: "+nombre+", Apellido: "+apellido);
        imprimirNumeros(numeros);
    }

    private static void imprimirNumeros(int ...numeros){ // Los ... son para definir un argumento variable
        for(int i = 0; i < numeros.length; i++){
            System.out.println("Elementos: "+numeros[i]);
        }
    }
}
