function seleccionarPersonajeJugador(){
    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');
    if(personajeSeleccionado){
        alert(`Seleccionaste tu personaje es ${personajeSeleccionado.id}!`);
}else{
    alert("cuidado donde clickeas!!")
}}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);