let ataqueJugador
let ataqueEnemigo

// Función que inicia el juego: espera el evento click en boton-personaje
function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

// recarga todo el juego
    let botonReiniciar = document.getElementById('boton-reiniciar');
     botonReiniciar.addEventListener('click', reiniciarJuego);

    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada= document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida= document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
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
//modificamos la variable global ataqueJugador
function ataquePunio(){
    ataqueJugador = 'Punio'
    ataqueAleatorioEnemigo()
}
function ataquePatada(){
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
}
function ataqueBarrida(){
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){//ocupamos la funcion aleatoria
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
    }else {
        ataqueEnemigo = 'Barrida'
    }
    combate();
}

function combate(){
           //combate
       if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
       }else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida'){
        crearMensaje("Ganaste")
       }else if(ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio'){
        crearMensaje("Ganaste")
       }else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada'){
        crearMensaje("Ganaste")  
       }else{
        crearMensaje("Perdiste 😵 jaja")
       }
}


function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu personaje ataco con ' + ataqueJugador + ', el personaje del enemigo ataco con '+ ataqueEnemigo + ' '+ resultado
   
    sectionMensaje.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


 // recarga todo el documento
function reiniciarJuego() {
 
  location.reload();
}
window.addEventListener('load', iniciarJuego);