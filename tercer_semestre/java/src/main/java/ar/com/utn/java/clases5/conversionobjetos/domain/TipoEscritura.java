package ar.com.utn.java.clases5.conversionobjetos.domain;

public enum TipoEscritura {
    CLASICO ("Escritura a mano"),
    MODERNO("Escritura digital");

    private final String descripcion;

    private TipoEscritura (String descripcion){
        this.descripcion = descripcion;
    }

    //método get
    public String getDescripcion(){
        return this.descripcion;
    }
}
