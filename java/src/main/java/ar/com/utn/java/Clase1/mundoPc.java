package ar.com.utn.java.Clase1;

public class mundoPc {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP",monitorHP,tecladoHP,ratonHP);

        Monitor monitorRedragon = new Monitor("Redragon", 17);
        Teclado tecladoRedragon = new Teclado("USB", "Redragon");
        Raton ratonRedragon = new Raton("USB", "Redragon");
        Computadora computadoraRedragon = new Computadora("Computadora Redragon",monitorRedragon,tecladoRedragon,ratonRedragon);

        Monitor monitorLogitech = new Monitor("Logitech", 24);
        Teclado tecladoLogitech = new Teclado("Bluetooth", "Logitech");
        Raton ratonLogitech = new Raton("Bluetooth", "Logitech");
        Computadora computadoraLogitech = new Computadora("Computadora Logitech",monitorLogitech,tecladoLogitech,ratonLogitech);

        Monitor monitorHyperx = new Monitor("Hyperx", 19);
        Teclado tecladoHyperx = new Teclado("USB", "Hyperx");
        Raton ratonHyperx = new Raton("USB", "Hyperx");
        Computadora computadoraHyperx = new Computadora("Computadora Hyperx",monitorHyperx,tecladoHyperx,ratonHyperx);

        Orden orden1 = new Orden(); // Inicializamos el arreglo vacio
        Orden orden2 = new Orden(); // Una nueva lista para el objeto orden2

        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraRedragon);
        orden1.agregarComputadora(computadoraHyperx);
        orden1.agregarComputadora(computadoraLogitech);

        Computadora compuradoraVarias = new Computadora("Compu de marcas variadas",monitorHyperx,tecladoHP,ratonLogitech);


        orden2.agregarComputadora(computadoraHP);
        orden2.agregarComputadora(compuradoraVarias);

        orden1.mostrarOrden();
        orden2.mostrarOrden();

        //Crear mas objetos de tipo computadora con todos sus elementos
        //completar una lista en el objeto orden1 que llegue a los 10 elementos
        //probar de esta manera los metodos al maximo rendimiento
        Computadora computadora6 = new Computadora("ComputadoraA",monitorHP,tecladoLogitech,ratonHP);
        Computadora computadora7 = new Computadora("ComputadoraB",monitorHyperx,tecladoRedragon,ratonHyperx);
        Computadora computadora8 = new Computadora("ComputadoraC",monitorLogitech,tecladoHyperx,ratonLogitech);
        Computadora computadora9 = new Computadora("ComputadoraD",monitorRedragon,tecladoHP,ratonRedragon);
        Computadora computadora10 = new Computadora("ComputadoraF",monitorHyperx,tecladoLogitech,ratonRedragon);
        Computadora computadora11 = new Computadora("ComputadoraG",monitorRedragon,tecladoHyperx,ratonHP);
        System.out.println("");

        orden1.agregarComputadora(compuradoraVarias);
        orden1.agregarComputadora(computadora6);
        orden1.agregarComputadora(computadora7);
        orden1.agregarComputadora(computadora8);
        orden1.agregarComputadora(computadora9);
        orden1.agregarComputadora(computadora10);
        orden1.agregarComputadora(computadora11);
        orden1.mostrarOrden();

    }
}
