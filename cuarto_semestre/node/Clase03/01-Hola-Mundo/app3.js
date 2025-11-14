console.log('Inicio del programa'); //1

setTimeout(() => {
    console.log('Primer Timeout'); //5
}, 3000);// Primero son leidas y luego de leido todo el programa las ejecuta

setTimeout(() => {
    console.log('Segundo Timeout'); //3
}, 0);

setTimeout(() => {
    console.log('Tercero Timeout'); //4
}, 0);

console.log('Fin del programa'); //2

//Todas son funciones asincronas no bloqueantes aunque el timeout sea 0,
//se ejecuta despues del codigo sincrono (el console.log)