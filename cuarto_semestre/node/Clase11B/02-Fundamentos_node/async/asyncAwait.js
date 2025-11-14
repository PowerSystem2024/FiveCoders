// La palabra async no es necesaria en las funciones, porque ya son asincronas
//Igual proyectan una sincronia visual
async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola '+nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre){
    return new Promise( (resolve, reject) => { //usamos la sintaxis ES6
        setTimeout(function() {
            console.log('Bla bla bla...');
            resolve(nombre);
        },1000);
    });
}

async function adios(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log('Adiós '+nombre);
            //if(err) reject('Hay un error');
            resolve();
        }, 1000);
    })
    
}

// await hola('Ariel'); // Esto es una mala sintaxis
// await solo es valido dentro de una funcion asincrona
async function main(){
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...');
}
 
// console.log('Empezamos el proceso...');
// main();
// console.log('Esta va a ser la segunda instrucción');

//Codigo en ingles
function sayHello(name){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hello '+name);
            resolve(name);
        }, 1000);
    });
}

function talk(name){
    return new Promise( (resolve, reject) => { //usamos la sintaxis ES6
        setTimeout(function() {
            console.log('Blah blah blah...');
            resolve(name);
        },1000);
    });
}

function sayBye(name){
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log('Goodbye '+name);
            //if(err) reject('Hay un error');
            resolve(name);
        }, 1000);
    })
}

async function conversation(name) {
    console.log('Code in english');
    console.log('Starting the process...');
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed');
}