function logConsola(mensaje) {
    const consola = document.getElementById('consola-log');
    consola.innerHTML += mensaje + '<br>';
    consola.scrollTop = consola.scrollHeight;
}

function dibujarTablero(t, x, y, recorrido) {
    let html = '<table>';
    for (let i = 0; i < t; i++) {
        html += '<tr>';
        for (let j = 0; j < t; j++) {
            const esNegra = (i + j) % 2 === 1; 
            const colorClase = esNegra ? 'celda-negra' : 'celda-blanca';
            let contenido = '';
            if (recorrido && recorrido[i][j] > 0) {
                contenido = recorrido[i][j];
            } else if (i === y && j === x) {
                contenido = '♞';
            }
            html += `<td class="celda-tablero ${colorClase}">${contenido}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('tablero').innerHTML = html;
}

function limpiarConsola() {
    document.getElementById('consola-log').innerHTML = '';
}

function inicializarTablero() {
    limpiarConsola();
    const t = +document.getElementById('tamano').value;
    const x = +document.getElementById('posicion-x').value;
    const y = +document.getElementById('posicion-y').value;
    if (!Number.isInteger(t) || !Number.isInteger(x) || !Number.isInteger(y)) {
        logConsola('Error: completar todos los campos.');
        return;
    }
    if (t === 0) {
        logConsola('Error: el tamaño del tablero no puede ser cero.');
        return;
    }
    if (x < 0 || x >= t || y < 0 || y >= t) {
        logConsola('Error: posición fuera del tablero.');
        return;
    }
    logConsola(`Tablero: ${t}, Caballo: (${x},${y})`);
    dibujarTablero(t, x, y);
    resolverRecorridoCaballo(t, x, y);
}

// Recorrido del caballo:

function resolverRecorridoCaballo(tamano, xInicio, yInicio) {
    logConsola('Buscando recorrido del caballo...');

    // Crear el tablero vacío 
    let tablero = [];
    for (let i = 0; i < tamano; i++) {
        let fila = [];
        for (let j = 0; j < tamano; j++) {
            fila.push(0);
        }
        tablero.push(fila);
    }

    // El primer paso es la posición inicial del caballo
    tablero[yInicio][xInicio] = 1;

    // Guardar los movimientos del caballo
    const movimientos = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Función recursiva para buscar el recorrido
    function buscar(x, y, paso) {
        if (paso > tamano * tamano) {
            return true; // Recorrido completo!
        }
        for (let i = 0; i < movimientos.length; i++) {
            let dx = movimientos[i][0];
            let dy = movimientos[i][1];
            let nx = x + dx;
            let ny = y + dy;
            // Verificar que esté dentro del tablero y no visitado
            if (
                nx >= 0 && nx < tamano &&
                ny >= 0 && ny < tamano &&
                tablero[ny][nx] === 0
            ) {
                tablero[ny][nx] = paso; // Marcar el paso
                if (buscar(nx, ny, paso + 1)) {
                    return true;
                }
                tablero[ny][nx] = 0; // Deshacer si no funciona
            }
        }
        return false; // No se pudo completar desde aquí
    }

    // Intentar encontrar el recorrido
    let exito = buscar(xInicio, yInicio, 2);

    if (exito) {
        logConsola('¡Recorrido encontrado!');
    } else {
        logConsola('No se encontró un recorrido completo.');
    }

    // Mostrar el tablero final
    dibujarTablero(tamano, xInicio, yInicio, tablero);
}
