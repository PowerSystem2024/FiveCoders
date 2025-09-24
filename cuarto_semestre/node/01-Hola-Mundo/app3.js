console.log('Inicio del programa');//operación síncrona

setTimeout(() => {
    console.log('Primer timeout, después de 3 segundos');
}, 3000); /**esta es una operación asíncrona. Node.js la programa para que se ejecute después de 3000 milisegundos (3 segundos) y no espera a que termine. Continúa con la siguiente línea de código. */

setTimeout(() => {
    console.log('Segundo timeout');
}, 0);

setTimeout(() => {
    console.log('Tercer timeout');
}, 0);

console.log('Fin del programa');//operación síncrona

/**De esta clase nos llevamos que todas son instrucciones no bloqueantes 
 * nos demuestra que Node es asíncrono en su naturaleza
 * y que las funciones de callback se ejecutan en un loop de eventos
 */