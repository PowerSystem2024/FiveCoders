
let max = 3
let min = 1

function aleatorio(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada){
    if (jugada == 1){
        return "piedra 🪨";
    } else if (jugada == 2){
        return "papel 📄";
    } else if (jugada == 3){
        return "tijera ✂️";
    } else {
        return "Mal elegido";
    }
}

function iniciarJuego() {
    let triunfos = 0;
    let perdidas = 0;

    while(triunfos < 3 && perdidas < 3){
        const pc = aleatorio(3,1);
        const jugador = parseInt(prompt("Elige: 1 piedra, 2 papel, 3 tijera"));

        if (![1,2,3].includes(jugador)) {
            alert("Elección inválida. Intenta de nuevo.");
            continue;
        }

        alert("PC elige " + eleccion(pc));
        alert("Tú eliges " + eleccion(jugador));

        if(pc === jugador){
            alert("Empate");
        } else if((jugador === 1 && pc === 3) ||
                  (jugador === 2 && pc === 1) ||
                  (jugador === 3 && pc === 2)) {
            alert("Ganaste");
            triunfos++;
        } else {
            alert("Perdiste jaja");
            perdidas++;
        }
    }

    alert("Ganaste: " + triunfos + " veces, Perdiste: " + perdidas + " veces");
}

// Esta es la función que llama el botón y reinicia el juego desde la function linea 21

function reiniciarJuego() {
    iniciarJuego();
}
