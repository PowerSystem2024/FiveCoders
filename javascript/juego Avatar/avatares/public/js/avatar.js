// Función que inicia el juego: espera el evento click en boton-personaje
function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
}

// Función que selecciona el personaje del jugador y el enemigo
function seleccionarPersonajeJugador() {
    const personajes = ['Zuko', 'Katara', 'Aang', 'Toph'];
    let personajeSeleccionado = null; //incia variable para el personaje del jugador 

    if (document.getElementById('Zuko').checked) {
        personajeSeleccionado = 'Zuko';
    } else if (document.getElementById('Katara').checked) {
        personajeSeleccionado = 'Katara';
    } else if (document.getElementById('Aang').checked) {
        personajeSeleccionado = 'Aang';
    } else if (document.getElementById('Toph').checked) {
        personajeSeleccionado = 'Toph';
    } else {
        alert("Selecciona un personaje para continuar.");
        return;
    }

    document.getElementById('personaje-jugador').innerHTML = personajeSeleccionado;

    // Selección aleatoria del enemigo (distinto al jugador)
    const opcionesEnemigo = personajes.filter(p => p !== personajeSeleccionado); // Crea un arreglo nuevo con los personajes que no son el jugador
    const enemigo = opcionesEnemigo[Math.floor(Math.random() * opcionesEnemigo.length)]; //Selecciona un enemigo aleatorio
    // Muestra el personaje del enemigo en el HTML
    document.getElementById('personaje-enemigo').innerHTML = enemigo;
}

window.addEventListener('load', iniciarJuego);