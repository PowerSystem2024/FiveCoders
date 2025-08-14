package ar.com.utn.java.clases5.claseabstracta.test;

import ar.com.utn.java.clases5.claseabstracta.domain.FiguraGeometrica;
import ar.com.utn.java.clases5.claseabstracta.domain.Rectangulo;

public class TestAbstractas {
   public static void main(String[] args) {
        FiguraGeometrica figura = new Rectangulo("Rectángulo");
        figura.dibujar();
    }
}
