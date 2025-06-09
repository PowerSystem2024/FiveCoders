


function mifuncion(){
    console.log('mi funcion')
}

mifuncion();

let myFuncion = function() {
    console.log('funcion anonima')
}

//Funcion flecha
let miFuncionFlecha = () => {
    console.log('funcion flecha');
}
//hay mas variantes para la funcion flecha
miFuncionFlecha();

//en una linea
const saludar = () => console.log('Saludo desde js');

saludar;

//otro ejemplo
const saludar2 = () => {
    return 'Saludos desde esta funcion flecha2'
}

console.log(saludar2());

//simplificamos la funcion anterior
const saludar3 = () => 'saludos desde la funcion 3';

console.log(saludar3());

//mas ejemplos
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Perez'});

console.log(regresaObjeto());

//funciones flecha que reciben parametros
const funcionParametros = (mensaje) => console.log( mensaje );

funcionParametros('funcion con parametro');

//funcion clasica
const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}

funcionParametrosClasica('funcion clasica');

//se puede omitir los parantesis en funcion flecha =>
    const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('otra forma de trabajar con funcion flecha');

//funcion flecha con varios parametros
//podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros2 = (op1, op2,) => {
    let resultado = op1 + op2;
    return resultado;
};

console.log(funcionConParametros2(3,5));