function esSeguro(tablero, fila, col, N) {
    for (let i = 0; i < col; i++) {
        if (tablero[fila][i] === 1) return false;
    }
    for (let i = fila, j = col; i >= 0 && j >= 0; i--, j--) {
        if (tablero[i][j] === 1) return false;
    }
    for (let i = fila, j = col; i < N && j >= 0; i++, j--) {
        if (tablero[i][j] === 1) return false;
    }
    return true;
}

function resolverNReinas(tablero, col, N, indices) {
    if (col >= N) return true;
    for (let i = 0; i < N; i++) {
        if (esSeguro(tablero, i, col, N)) {
            tablero[i][col] = 1;
            indices[col] = i;
            if (resolverNReinas(tablero, col + 1, N, indices)) return true;
            tablero[i][col] = 0;
        }
    }
    return false;
}

function iniciarNReinas() {
    const N = parseInt(document.getElementById("valorN").value);
    let tablero = Array.from({ length: N }, () => Array(N).fill(0));
    let indices = Array(N).fill(null);

    if (resolverNReinas(tablero, 0, N, indices)) {
        crearTablero(tablero, N);
        mostrarIndices(indices);
    } else {
        alert("No hay solución.");
    }
}

function crearTablero(solucion, N) {
    const tableroElement = document.getElementById("tablero");
    tableroElement.innerHTML = "";
    tableroElement.style.setProperty("--N", N);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const casilla = document.createElement("div");
            casilla.classList.add("casilla", (i + j) % 2 === 0 ? "blanco" : "negro");

            if (solucion[i][j] === 1) {
                const imagen = document.createElement("img");
                imagen.src = "./game.png";
                imagen.alt = "Reina";
                imagen.classList.add("reina");
                casilla.appendChild(imagen);
            }

            tableroElement.appendChild(casilla);
        }
    }
}

function mostrarIndices(indices) {
    const indicesElement = document.getElementById("indices");
    indicesElement.innerHTML = `<p>Índices de las Reinas (fila, columna):</p> <pre>${JSON.stringify(indices.map((fila, col) => `[${fila}, ${col}]`), null, 2)}</pre>`;
}

function ajustarVisibilidad(N) {
    const rey = document.querySelector(".rey");
    const reina = document.querySelector(".reina");

    if (N > 8) {
        rey.style.opacity = 0.3;  
        reina.style.opacity = 0.3;
    } else {
        rey.style.opacity = 1;
        reina.style.opacity = 1;
    }
}