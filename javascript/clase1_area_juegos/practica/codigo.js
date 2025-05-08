        // Funcion aleatorio
        function aleatorio(max, min){
            return Math.floor(Math.random()*(max - min + min)+ min);
        } 

        function eleccion(jugada){
            if (jugada == 1){
                resultado = "piedra 🪨"
        } else if (jugada == 2){
                resultado = "papel 📄"
        } else if (jugada == 3){
                resultado = "tijera ✂️"
        } else {
            resultado = "Mal elegido"
        }
        return resultado
        }

        // 1 piedra. 2 papel. 3 tijera
        let triunfos = 0
        let perdidas = 0
        let jugador = 0
        let pc = aleatorio(3,1)
        //jugador = parseInt(prompt("Elige: 1 piedra, 2 papel, 3 tijera"))

        while(triunfos < 3 && perdidas < 3){
            pc = aleatorio(3,1)
            jugador = parseInt(prompt("Elige: 1 piedra, 2 papel, 3 tijera"))

            // alert("Elige jugador " + jugador)
        alert("PC Elige " + eleccion(pc))
        alert("Tu Eliges " + eleccion(jugador))

       //combate
       if(pc == jugador){
        alert("Empate")
       }else if(jugador == 1 && pc == 3){
        alert("Ganaste")
        triunfos = triunfos + 1
       }else if(jugador == 2 && pc == 1){
        alert("Ganaste")
        triunfos = triunfos + 1
       }else if(jugador == 3 && pc == 2){
        alert("Ganaste")
        triunfos = triunfos + 1
       }else{
        alert("Perdiste jaja")
        perdidas = perdidas + 1
       }
        }


       alert("Ganaste: " + triunfos + " Veces" + " ,Perdiste: " + perdidas + " Veces")