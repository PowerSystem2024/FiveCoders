// Clase Padre: DispositivoEntrada

class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        // En JavaScript, la convención es usar _ para indicar "protegido/privado"
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    // Getters y Setters 
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `Marca: ${this._marca}, Tipo Entrada: ${this._tipoEntrada}`;
    }
}

// Clase Hija: Raton (Hereda de DispositivoEntrada)
class Raton extends DispositivoEntrada {
    static contadorRatones = 0; // Atributo estático para el contador

    constructor(marca) {
        super('Ratón', marca); // Llama al constructor de DispositivoEntrada
        // Asigna ID basado en el contador estático
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    // Sobrescribe toString para incluir idRaton y la info del padre
    toString() {
        return `Raton: [Id: ${this._idRaton}, ${super.toString()}]`;
    }
}

// Clase Hija: Teclado (Hereda de DispositivoEntrada)
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0; // Atributo estático 

    constructor(marca) {
        super('Teclado', marca); // Llama al constructor de DispositivoEntrada
        // Asigna ID basado en el contador estático
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    // Sobrescribe toString para incluir idTeclado y la info del padre
    toString() {
        return `Teclado: [Id: ${this._idTeclado}, ${super.toString()}]`;
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitores = 0; // Atributo estático

    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores; // Asigna ID
        this._marca = marca;
        this._tamanio = tamanio;
    }

    // Getter solicitado
    get idMonitor() {
        return this._idMonitor;
    }

    // Getters y Setters 
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get tamanio() {
        return this._tamanio;
    }
    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }

    toString() {
        return `Monitor: [Id: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}]`;
    }
}

// Clase Computadora (Agrega Monitor, Teclado, Raton)
class Computadora {
    static contadorComputadoras = 0; // Atributo estático

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras; // Asigna ID
        this._nombre = nombre;
        // Agregación: guarda las instancias recibidas
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }

    // toString() que incluye la información de sus componentes
    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre}\n   ${this._monitor.toString()}\n   ${this._teclado.toString()}\n   ${this._raton.toString()}`;
    }
}

//Metodo para polimorfismo
function imprimir(tipo){
    console.log(tipo.toString());
    if( tipo instanceof Raton){
        console.log('Es un objeto de tipo Raton');
    }
    else if( tipo instanceof Teclado){
        console.log('Es un objeto de tipo Teclado');
    }
    else if( tipo instanceof DispositivoEntrada){
        console.log('Es un objeto de tipo DispositivoEntrada');
    }
    else if( tipo instanceof Monitor){
        console.log('Es un objeto de tipo Monitor');
    }
    else if( tipo instanceof Computadora){
        console.log('Es un objeto de tipo Computadora');
    }
    else if( tipo instanceof Orden){
        console.log('Es un objeto de tipo Orden');
    }
    else if( tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
}

// Clase Orden (Agrega Computadoras)
class Orden {
    static contadorOrdenes = 0; // Atributo estático

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes; // Asigna ID
        // Inicializa el arreglo vacío para almacenar las computadoras
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    // Método para agregar una computadora al arreglo
    agregarComputadora(computadora) {
       
        this._computadoras.push(computadora);
    }

    // Método para mostrar la orden y sus computadoras
    mostrarOrden() {
        let ordenStr = `Orden: ${this._idOrden}\nComputadoras:\n`;
        if (this._computadoras.length === 0) {
            ordenStr += "  (No hay computadoras en esta orden)\n";
        } else {
            // Itera sobre el arreglo y usa el toString de cada Computadora
            this._computadoras.forEach(comp => {
                ordenStr += `  ${comp.toString()}\n`; // Agrega indentación
            });
        }
        // Imprime en consola (o podría retornar el string)
        console.log(ordenStr);
        // return ordenStr; // Alternativa: retornar el string
    }

    
    get computadoras() {
        return [...this._computadoras]; 
    }
}


// --- Ejemplo de Uso ---
const ratonLogi = new Raton("Logitech");
const tecladoHP = new Teclado("HP");
const monitorSamsung = new Monitor("Samsung", "27 pulgadas");

const compuGamer = new Computadora("PC Gamer", monitorSamsung, tecladoHP, ratonLogi);
//console.log(compuGamer.toString());

const ratonDell = new Raton("Dell");
const tecladoMicro = new Teclado("Microsoft");
const monitorLG = new Monitor("LG", "24 pulgadas");

const compuOficina = new Computadora("PC Oficina", monitorLG, tecladoMicro, ratonDell);
//console.log(compuOficina.toString());

const orden1 = new Orden();
orden1.agregarComputadora(compuGamer);
orden1.agregarComputadora(compuOficina);

console.log("--- Mostrando Orden 1 ---");
orden1.mostrarOrden();

const orden2 = new Orden();
orden2.agregarComputadora(compuGamer); // Se puede agregar la misma compu a otra orden

console.log("\n--- Mostrando Orden 2 ---");
orden2.mostrarOrden();

console.log(`\nTotal de órdenes creadas: ${Orden.contadorOrdenes}`);
console.log(`Total de computadoras creadas: ${Computadora.contadorComputadoras}`);

// --- Ejemplo de polimorfismo ---
console.log('-----Polimorfismo-----');
imprimir(compuGamer);
imprimir(monitorLG);
imprimir(ratonDell);
imprimir(orden1);

