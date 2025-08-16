
mifuncion1();

function mifuncion1(){
    console.log('Funcion 1');
}

miFuncion2();

function miFuncion2(){
    console.log('Funcion 2');
}


// funcion de tipo callback
let imp = function imprimir( mensaje ){
    console.log(mensaje);
}

function sumar(op1, op2, functionCallback){
    let res = op1 + op2;
    functionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);

//Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 5 segundos');
}
setTimeout(miFuncionCallback, 5000);

setTimeout( function() { console.log('saludo asincrono 2 la venganza')}, 3000);

setTimeout( () => console.log('saludos asincrono 3 ahora es personal'), 4000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//cadan1nsegundo se ejecuta