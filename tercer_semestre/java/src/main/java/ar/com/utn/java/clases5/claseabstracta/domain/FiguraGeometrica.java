package ar.com.utn.java.clases5.claseabstracta.domain;

public abstract class FiguraGeometrica {

    protected String tipoFigura;

    protected FiguraGeometrica(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }

    //método abstracto
    public abstract void dibujar();

    //agregamos get y set
    public String getTipoFigura(){
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
}
