const n = 8;

// Movimientos del caballo (dx, dy)
const movimientos = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

// Crea el tablero inicial con -1
function crearTablero(n) {
  const tablero = new Array(n);
  for (let i = 0; i < n; i++) {
    tablero[i] = new Array(n).fill(-1);
  }
  return tablero;
}

// Verifica si la posición es válida
function esValido(x, y, tablero) {
  return x >= 0 && x < n && y >= 0 && y < n && tablero[x][y] === -1;
}

// Algoritmo recursivo (backtracking)
function resolverSaltoCaballo(x, y, paso, tablero) {
  if (paso === n * n) return true;

  for (const [dx, dy] of movimientos) {
    const nx = x + dx;
    const ny = y + dy;

    if (esValido(nx, ny, tablero)) {
      tablero[nx][ny] = paso;

      if (resolverSaltoCaballo(nx, ny, paso + 1, tablero)) {
        return true;
      }

      tablero[nx][ny] = -1; // backtrack
    }
  }

  return false;
}

// Imprimir el tablero formateado
function imprimirTablero(tablero) {
  for (const fila of tablero) {
    console.log(fila.map(c => c.toString().padStart(2, '0')).join(' '));
  }
}

// Función principal
function tourDelCaballo() {
  const tablero = crearTablero(n);
  tablero[0][0] = 0;

  if (resolverSaltoCaballo(0, 0, 1, tablero)) {
    imprimirTablero(tablero);
  } else {
    console.log("No se encontró una solución.");
  }
}

// Ejecutar
tourDelCaballo();
