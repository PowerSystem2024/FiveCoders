//  VARIABLE GLOBALES
let ataqueJugador;
let ataqueEnemigo;
let personajeJugador;
let personajeEnemigo;
let vidaJugador;
let vidaEnemigo;

//  BOTONES PRINCIPALES DEL JUEGO
function iniciarJuego(){
    // Escondemos la seccion de seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque'); // Vinculamos una variable con una seccion de HTML
    sectionSeleccionarAtaque.style.display = 'none'; // elemento.style.display = 'none', esto esconde el elemento seleccionado
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = "none";

    //  PERSONAJES  
    let botonPersonajeJugador = document.getElementById('boton-personaje'); //Asignamos todos los elementos con el Id 'boton-personaje' de nuestro documento
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador); //Con esto agregamos que evento tiene que esperar este boton (en este caso un click) y la funcion que va a llevar a cabo

    //  REGLAS
    document.getElementById("reglas-del-juego").style.display = "none";

    document.getElementById('boton-reglas').addEventListener('click',mostrarReglas);
    // document.getElementById('boton-jugar').addEventListener('click', seleccionarPersonajeJugador);

    //  ATAQUES
    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida);

    //  REINICIO DEL JUEGO
    let botonReinicio = document.getElementById('boton-reiniciar');
    botonReinicio.addEventListener('click', reiniciarJuego);
}

//  REGLAS
function mostrarReglas(){
    let mostrarReglas = document.getElementById("reglas-del-juego"); 
    mostrarReglas.style.display = "block";// Mostramos las reglas del juego
    document.getElementById("seleccionar-personaje").style.display = "none"; // Escondemos la seccion de seleccionar personaje
    document.getElementById("seleccionar-ataque").style.display = "none"; // Escondemos la seccion de seleccionar ataque
    let botonCerrarReglas = document.getElementById('boton-cerrar-reglas'); // Vinculamos una variable con el boton de cerrar las REGLAS
    botonCerrarReglas.addEventListener('click', function() {
        mostrarReglas.style.display = "none";
        document.getElementById("seleccionar-personaje").style.display = "block"; // Mostramos la seccion de seleccionar personaje
    }); // Al hacer click en el boton de cerrar las reglas, se esconde la seccion de reglas
}

//  SELECCION DE PERSONAJES
function seleccionarPersonajeJugador(){
    //Obtenemos todos los inputs con name="personaje"
    let personajes = document.getElementsByName("personaje"); // .getElementsByName nos devuelve todos los elementos con el name "personaje"
    let spanPersonajeJugador = document.getElementById('personaje-jugador');
    let noSelecciono = true;

    // Mostramos la seccion seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block'; // elemento.style.display = 'block', esto muestra la seccion
    // Escondemos la seccion de seleccionar personaje
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje'); // Vinculamos una variable con una seccion de HTML
    sectionSeleccionarPersonaje.style.display = 'none'; // elemento.style.display = 'none', esto esconde el elemento seleccionado

    document.getElementById("reglas-del-juego").style.display = "none"; // Ocultamos las reglas

    //Recorremos la lista para ver cual esta seleccionado
    for (let personaje of personajes) {
        if (personaje.checked) { // .checked nos muestra cual es el que se ha seleccionado
            personajeJugador = personaje.id.charAt(0).toUpperCase()+personaje.id.substring(1); // .id nos da el valor del personaje elegido (porq asi esta en el html) 
            //.charAt(0).toUpperCase() (esto devuelve el primer (0) caracter en mayuscula) .substring(1) (esto devuelve toda la cadena apartir de cierto caracter, en este caso el 1)
            noSelecciono = false;
            spanPersonajeJugador.innerHTML = personajeJugador; // pjCapitalice es simplemente el personaje puesto con la primer letra en mayuscula
            break 
        }
    } 
    if (noSelecciono == true){ // Condicional para cuando no se elija ningun personaje
        // Mostrar un mensaje temporal en la pantalla si no se ha seleccionado un personaje
        let mensajeError = document.createElement('p');
        mensajeError.innerHTML = 'Seleccionar un personaje';
        mensajeError.style.color = 'red';

        let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje');
        sectionSeleccionarPersonaje.appendChild(mensajeError)

        // Eliminar el mensaje de error despues de 2 segundos
        setTimeout(() => {
            sectionSeleccionarPersonaje.removeChild(mensajeError);
        }, 2000)
        reiniciarJuego();
        return
    }
    seleccionarPersonajeEnemigo();
    elegirVidaPersonajes();
    mostrarVida();
}

function seleccionarPersonajeEnemigo () {
    let personajeIgual = true;
    personajeEnemigo;
    // Bucle para que no se repitan los personajes
    while (personajeIgual){
        // Elige aleatoriamente el personaje enemigo
        let enemigoAleatorio = aleatorio(1,4);
        let personajes = document.getElementsByName("personaje");
        personajeEnemigo = personajes[enemigoAleatorio-1];// Esto es para que den bien los numero con respecto a la lista, si es la primer posicion (1), en la lista es el 0
        // Verificar que personaje elegio el jugador
        for (let personaje of personajes){
            if (personaje.checked) {
                personajeJugador = personaje;
            }
        }
        if (personajeJugador != personajeEnemigo){
            personajeIgual = false;
        }
    } 
    // Para que el personaje tenga la primer letra mayuscula
    let pjCapitalice = personajeEnemigo.id.charAt(0).toUpperCase()+personajeEnemigo.id.substring(1);
    // Cambiamos el span personaje-enemigo del HTML por el personaje elegido
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    spanPersonajeEnemigo.innerHTML = pjCapitalice;
}

// Esta funcion es dependiendo de que elemento sea cada personaje, decidir si tiene ventaja, desventaja o si es parejo
function elegirVidaPersonajes(){ 
    let fuego = document.getElementById('zuko');
    let agua = document.getElementById('katara');
    let tierra = document.getElementById('toph');
    let aire = document.getElementById('aang');

    if( (personajeJugador == fuego && personajeEnemigo == agua) ||
    (personajeJugador == agua && personajeEnemigo == tierra) ||
    (personajeJugador == tierra && personajeEnemigo == aire) ||
    (personajeJugador == aire && personajeEnemigo == fuego) ){
        // Personaje del jugador tiene ventaja
        vidaJugador = 4;
        vidaEnemigo = 3;
    }else if( (personajeEnemigo == fuego  && personajeJugador == agua) ||
    (personajeEnemigo == agua && personajeJugador == tierra) ||
    (personajeEnemigo == tierra && personajeJugador == aire) || 
    (personajeEnemigo == aire && personajeJugador == fuego) ){
        // Personaje del enemigo tiene ventaja
        vidaJugador = 3;
        vidaEnemigo = 4;
    }else{
        // Tienen la misma vida
        vidaJugador = 3;
        vidaEnemigo = 3;
    }
}

// Muestra que vida tiene cada personaje
function mostrarVida(){
    let spanVidaJugador = document.getElementById('vida-jugador');
    let spanVidaEnemigo = document.getElementById('vida-enemigo');
    spanVidaJugador.innerHTML = vidaJugador;
    spanVidaEnemigo.innerHTML = vidaEnemigo;
}

function revisarVidas(){
    if(vidaEnemigo == 0){
        //Ganamos
        crearMensajeFinal('Felicitaciones GANASTE')
    } else if(vidaJugador == 0){
        //Perdimos
        crearMensajeFinal('Buen intento PERDISTE')
    }
}

//  COMBATE
function ataquePunio(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Punio';
    ataqueAleatorioEnemigo(); //Al clickear un tipo de ataque activa el ataque enemigo
}

function ataquePatada(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo(); //Al clickear un tipo de ataque activa el ataque enemigo
}

function ataqueBarrida(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();//Al clickear un tipo de ataque activa el ataque enemigo
}

function ataqueAleatorioEnemigo(){ //Ahora ocupando la variable global nueva le asignamos un valor aleatorio
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio';
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada';
    } else {
        ataqueEnemigo = 'Barrida';
    }

    combate();// Inicia el combate
}

function combate(){
    let mensajeEnviar;

    if (ataqueJugador == ataqueEnemigo){
        //No pierde vida ninguno
        mensajeEnviar = ',sus ataques chocaron y se cancelaron mutuamente. EMPATE.';
        crearMensaje(mensajeEnviar);
    // Verificacion si nuestro personaje gana el intercambio
    }else if((ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida' )||
            (ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio' )||
            (ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada' )){
        // Mensaje a enviar
        mensajeEnviar =  ', tu diste primero y esquivaste su ataque. TU GANASTE el intercambio.';
        crearMensaje(mensajeEnviar);
        vidaEnemigo -= 1;
    }else{
        mensajeEnviar = ', el dio primero y esquivo tu ataque. EL GANO el intercambio.';
        crearMensaje(mensajeEnviar);
        vidaJugador -= 1;
    }
    mostrarVida();
    //Revisar vidas
    revisarVidas();
}

//  CREACION DE MENSAJES
function crearMensaje(mensaje){ 
    let sectionMensaje = document.getElementById("mensajes");
    let parrafo = document.createElement('p'); //Creamos un parrafo en HTML desde JS
    // Le asignamos un texto
    parrafo.innerHTML =  'Atacaste con '+ ataqueJugador +' y el enemigo ataco con '+ ataqueEnemigo + mensaje;
    // Y lo agregamos al HTML
    sectionMensaje.appendChild(parrafo);
}

function crearMensajeFinal(mensaje){ 
    // Mostramos la seccion reiniciar
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = "block";
    
    let sectionMensaje = document.getElementById("mensajes");
    let parrafo = document.createElement('p'); //Creamos un parrafo en HTML desde JS
    // Le asignamos un texto
    parrafo.innerHTML =  mensaje;
    // Y lo agregamos al HTML
    sectionMensaje.appendChild(parrafo);

    //  ATAQUES
    let botonPunio = document.getElementById('boton-punio');
    botonPunio.disabled = true; // .disable deshabilita el boton seleccionado
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.disabled = true; // .disable deshabilita el boton seleccionado
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.disabled = true; // .disable deshabilita el boton seleccionado
}

// BOTON REINICIAR
function reiniciarJuego(){
    location.reload(); // Este comando reinicia la pagina
}

// VALORES ALEATORIOS
function aleatorio(min,max){ 
    return Math.floor(Math.random()*(max-min+1)+min);
}

//cuando window (la ventanda del navegador) cargue activa la funcion
window.addEventListener('load', iniciarJuego) 