class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre},
        Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
//Agregamos la sobreescritura

obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
}



}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles() );
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log( tipo._departamento)
    }
     else if(tipo instanceof Empleado){
         console.log('Es de tipo  Empleado');
         console.log(tipo._departamento) // no existe en la clase padre
     }
    else if(tipo instanceof Object){ //El orden siempre es jerarquico
        console.log('Es de tipo Object') // clase padre de todas las clases
    }
}

let gerente1 = new Gerente("Carlo", 5000, "Sistemas");
console.log(gerente1); // objeto de la clase hija

let empleado1 = new Empleado("Juan, 3000");
console.log(empleado1);


imprimir(gerente1);
imprimir(empleado1);