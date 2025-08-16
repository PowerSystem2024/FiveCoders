package ar.com.utn.java.clases5.claseabstracta.domain;

public class Rectangulo extends FiguraGeometrica{


    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }

    @Override
    public void dibujar() {//implementando el método
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }
}
