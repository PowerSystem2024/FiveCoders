package ar.com.utn.java.Clase2.Enumeraciones;

public enum Continentes {
    AFRICA(53, "1.5 billones"),
    EUROPA(46, "741 millones"),
    ASIA(44, "4.78 billones"),
    AMERICA(34, "1.05 billones"),
    OCEANIA(14, "46 millones");

    private final int paises;
    private String habitantes;

    //Metodo de la enumeracion
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }

    //Metodo Get
    public int getPaises(){
        return this.paises;
    }

    public String getHabitantes(){
        return this.habitantes;
    }
}