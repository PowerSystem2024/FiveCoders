function hola(nombre, miCallBack){
    setTimeout(function() {
        console.log('Hola '+nombre);
        miCallBack(nombre);
    }, 1500);
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adiós '+nombre);
        otroCallback();
    }, 1000);
}

console.log ('Iniciando el proceso...');
hola("Carlos", function(nombre) {
    adios(nombre, function() {
        console.log ('Terminando  el proceso...');
    });
});

// hola("Carlos", function() {});
// adios("Carlos", function() {});

