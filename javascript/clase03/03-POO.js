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

    //agregamos la sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`
    }
}

function imprimir( tipo){ //recibe una variable
    console.log( tipo.obtenerDetalles());//segun el tipo que le pasemos, sera la informacion
    if( tipo instanceof Gerente){
        console.log('Es un objeto de tipo empleado');
        console.log( tipo._departamento);
    }
    else if( tipo instanceof Empleado){
        console.log('Es de tipo Empleado');
        console.log( tipo._departamento); //Esto es inutil, este atributo no existe en la clase hija
    }
    else if( tipo instanceof Object){ //el orden siempre es jerarquico
        console.log('Es de tipo Object'); //clase padre de todas las clases
    }

}

let gerente1 = new Gerente('Carlos', 5000, 'Sistema');
console.log(gerente1); //Objeto de la clase hija

let empleado1 = new Empleado('Juan', 3000);
console.log(empleado1);//Objeto de la clase padre

imprimir( gerente1);
imprimir( empleado1);





