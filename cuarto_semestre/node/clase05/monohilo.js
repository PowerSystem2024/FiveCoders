console.log("Hola Fivecoders desde archivo monohilo.js");

var i = 0 ; // variable iteradora

setInterval(function() {
    //console.log("Hola Fivecoders desde setInterval");
    console.log("i: ", i);

    i++;

   /* if(i === 5) {
        console.log("Error intencional");
        var a = 3 + z; // esto va a generar un error porque z no está definida
    }*/
},1000);

console.log("Segunda instrucción del archivo monohilo.js");
