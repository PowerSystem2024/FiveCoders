'use strict';
// Veamos como evitar este errot.
try {
      let x = 10;
      //miFuncion();
      throw'mi error'; //Lanzamos un error
}
catch (error) { //Catchamos el error
      console.log(typeof(error)); // Maneja tipo string
}
finally {
      console.log('Termina la revisión de errores');
}

// La ejecución ahora continua
console.log('Continuamos...'); //Esto no se ejecuta porque esta bloqueado.

let resultado = 'hola';

try{
      //y = 5;
      if(isNaN(resultado)) throw'No es un número';
      else if(resultado === '') throw'Es una cadena vacia';
      else if(resultado >= 0) throw'Es un número positivo';
      else if(resultado < 0) throw'Es un número negativo';
}
catch (error){
      console.log(error);
      console.log(error.name);
      console.log(error.message);
}
finally{
      console.log('Termina la revisión de errores 2');
}