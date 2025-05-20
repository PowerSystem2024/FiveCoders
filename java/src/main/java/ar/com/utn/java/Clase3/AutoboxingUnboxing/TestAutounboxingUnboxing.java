package test;

import java.lang.classfile.constantpool.IntegerEntry;

public class TestAutounboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
            Clases envolventes de tipos primitivos
            int = la clase envolvente es Interger
            long = la clase envolvente es Long
            float = la clase envolvente es Float
            double = la clase envolvente es Double
            boolean = la clase envolvente es Boolean
            byte = la clase envolvente es Byte
            char = la clase envolvente es Character
            short = la clase envolvente es Short
        */
        
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo object con la clase Integer
        System.out.println("entero = " + entero.doubleValue()); //Autoboxing

        int netero2 = entero;
        System.out.println("netero2 = " + netero2);
    }
}
