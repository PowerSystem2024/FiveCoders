// Variables y constantes globales
const ELEMENTOS = {
    zuko: 'fuego',
    katara: 'agua',
    aang: 'aire',
    toph: 'tierra'
};

const ATAQUES = ['Punio', 'Patada', 'Barrida'];

const SUPERIORIDAD = {
    fuego: 'agua',
    agua: 'tierra',
    tierra: 'aire',
    aire: 'fuego'
};

let avatares = []; // arreglo global de personajes

class Personaje {
    constructor(nombre, elemento) {
        this.nombre = nombre;
        this.elemento = elemento;
        this.vidas = 3;
    }
    setVentaja() {
        this.vidas = 4;
    }
    setDesventaja() {
        this.vidas = 3;
    }
    perderVida() {
        this.vidas -= 1;
    }
}

class Juego {
    constructor() {
        this.jugador = null;
        this.enemigo = null;
        this.ataqueJugador = null;
        this.ataqueEnemigo = null;

        // DOM
        this.sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
        this.sectionReiniciar = document.getElementById('reiniciar');
        this.botonReinicio = document.getElementById('boton-reiniciar');
        this.botonPersonajeJugador = document.getElementById('boton-personaje');
        this.reglasDelJuego = document.getElementById('reglas-del-juego');
        this.botonReglas = document.getElementById('boton-reglas');
        this.botonCerrarReglas = document.getElementById('boton-jugar');
        this.botonPunio = document.getElementById('boton-punio');
        this.botonPatada = document.getElementById('boton-patada');
        this.botonBarrida = document.getElementById('boton-barrida');
        this.sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje');
        this.personajesInputs = document.getElementsByName('personaje');
        this.spanPersonajeJugador = document.getElementById('personaje-jugador');
        this.spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
        this.spanVidaJugador = document.getElementById('vidas-jugador');
        this.spanVidaEnemigo = document.getElementById('vidas-enemigo');
        this.sectionMensaje = document.getElementById('mensajes');
        this.parrafo = null;
    }

    iniciar() {
        this.sectionSeleccionarPersonaje.style.display = 'block';
        this.sectionSeleccionarAtaque.style.display = 'none';
        this.sectionReiniciar.style.display = "none";
        this.reglasDelJuego.style.display = "none";

        this.botonPersonajeJugador.addEventListener('click', () => this.seleccionarPersonajeJugador());
        this.botonReglas.addEventListener('click', () => this.mostrarReglas());
        this.botonCerrarReglas.addEventListener('click', () => {
            this.reglasDelJuego.style.display = "none";
            this.sectionSeleccionarPersonaje.style.display = "block";
        });
        this.botonPunio.addEventListener('click', () => this.seleccionarAtaque('Punio'));
        this.botonPatada.addEventListener('click', () => this.seleccionarAtaque('Patada'));
        this.botonBarrida.addEventListener('click', () => this.seleccionarAtaque('Barrida'));
        this.botonReinicio.addEventListener('click', () => this.reiniciarJuego());

        this.crearPersonajes();
    }

    crearPersonajes() {
        // Solo si el arreglo está vacío, para evitar duplicados
        if (avatares.length === 0) {
            avatares.push(
                new Personaje('Zuko', 'fuego'),
                new Personaje('Katara', 'agua'),
                new Personaje('Aang', 'aire'),
                new Personaje('Toph', 'tierra')
            );
        }
    }

    mostrarReglas() {
        this.reglasDelJuego.style.display = "block";
        this.sectionSeleccionarPersonaje.style.display = "none";
        this.sectionSeleccionarAtaque.style.display = "none";
    }

    seleccionarPersonajeJugador() {
        let seleccionado = false;
        for (let input of this.personajesInputs) {
            if (input.checked) {
                let nombre = input.id.charAt(0).toUpperCase() + input.id.slice(1);
                this.jugador = avatares.find(p => p.nombre === nombre);
                seleccionado = true;
                this.spanPersonajeJugador.innerHTML = nombre;
                break;
            }
        }
        if (!seleccionado) {
            this.mostrarError('Seleccionar un personaje');
            return;
        }
        this.seleccionarPersonajeEnemigo();
        this.elegirVidaPersonajes();
        this.mostrarVida();
        this.sectionSeleccionarAtaque.style.display = 'block';
        this.sectionSeleccionarPersonaje.style.display = 'none';
    }

    mostrarError(mensaje) {
        let mensajeError = document.createElement('p');
        mensajeError.innerHTML = mensaje;
        mensajeError.style.color = 'red';
        this.sectionSeleccionarPersonaje.appendChild(mensajeError);
        setTimeout(() => {
            this.sectionSeleccionarPersonaje.removeChild(mensajeError);
        }, 2000);
        this.reiniciarJuego();
    }

    seleccionarPersonajeEnemigo() {
        let enemigo;
        do {
            let indice = this.aleatorio(0, avatares.length - 1);
            enemigo = avatares[indice];
        } while (enemigo.nombre === this.jugador.nombre);
        this.enemigo = enemigo;
        this.spanPersonajeEnemigo.innerHTML = this.enemigo.nombre;
    }

    elegirVidaPersonajes() {
        if (SUPERIORIDAD[this.jugador.elemento] === this.enemigo.elemento) {
            this.jugador.setVentaja();
            this.enemigo.setDesventaja();
        } else if (SUPERIORIDAD[this.enemigo.elemento] === this.jugador.elemento) {
            this.jugador.setDesventaja();
            this.enemigo.setVentaja();
        } else {
            this.jugador.setDesventaja();
            this.enemigo.setDesventaja();
        }
    }

    mostrarVida() {
        this.spanVidaJugador.innerHTML = this.jugador.vidas;
        this.spanVidaEnemigo.innerHTML = this.enemigo.vidas;
    }

    seleccionarAtaque(tipo) {
        this.ataqueJugador = tipo;
        this.ataqueEnemigo = this.ataqueAleatorio();
        this.combate();
    }

    ataqueAleatorio() {
        let indice = this.aleatorio(0, ATAQUES.length - 1);
        return ATAQUES[indice];
    }

    combate() {
        let mensajeEnviar = '';
        if (this.ataqueJugador === this.ataqueEnemigo) {
            mensajeEnviar = ', sus ataques chocaron y se cancelaron mutuamente. EMPATE.';
        } else if (
            (this.ataqueJugador === 'Punio' && this.ataqueEnemigo === 'Barrida') ||
            (this.ataqueJugador === 'Patada' && this.ataqueEnemigo === 'Punio') ||
            (this.ataqueJugador === 'Barrida' && this.ataqueEnemigo === 'Patada')
        ) {
            mensajeEnviar = ', tu diste primero y esquivaste su ataque. TU GANASTE el intercambio.';
            this.enemigo.perderVida();
        } else {
            mensajeEnviar = ', el dio primero y esquivo tu ataque. EL GANO el intercambio.';
            this.jugador.perderVida();
        }
        this.crearMensaje(mensajeEnviar);
        this.mostrarVida();
        this.revisarVidas();
    }

    crearMensaje(mensaje) {
        this.parrafo = document.createElement('p');
        this.parrafo.innerHTML = `Atacaste con ${this.ataqueJugador} y el enemigo ataco con ${this.ataqueEnemigo}${mensaje}`;
        this.sectionMensaje.appendChild(this.parrafo);
    }

    crearMensajeFinal(mensaje) {
        this.sectionReiniciar.style.display = "block";
        this.parrafo = document.createElement('p');
        this.parrafo.innerHTML = mensaje;
        this.sectionMensaje.appendChild(this.parrafo);
        this.botonPunio.disabled = true;
        this.botonPatada.disabled = true;
        this.botonBarrida.disabled = true;
    }

    revisarVidas() {
        if (this.enemigo.vidas === 0) {
            this.crearMensajeFinal('Felicitaciones GANASTE');
        } else if (this.jugador.vidas === 0) {
            this.crearMensajeFinal('Buen intento PERDISTE');
        }
    }

    reiniciarJuego() {
        location.reload();
    }

    aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

// Inicialización del juego
window.addEventListener('load', () => {
    const juego = new Juego();
    juego.iniciar();
});


/**
 *  1.2 Vamos a avanzar con el CSS

Las tareas que deben cumplir para el proximo miércoles y que deben mostrar en Zoom como grupo son: 

Color y background al h1
Background a todo el sitio
Tipografía
Flexbox y los tipos de display
Formato y layout a los titulos
Que sea responsive
 * 
 * 
 * 
 */