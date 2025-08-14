package paquete1;

public class Clase1 {
    public String atributoPublic = "Valor Atributo public";
    protected String atributoProtected = "valor atributo protected";

    public Clase1(){
        System.out.println("Constructor publico");
    }
    protected Clase1(String atributoProtected){
        System.out.println("Constructor protected");
    }

    public void metodoPublico(){
        System.out.println("Metodo publico");
    }
    protected void metodoProtected(){
        System.out.println("Metodo protected");
    }
}
