const canvas = document.getElementById("hanoiCanvas");
const ctx = canvas.getContext("2d");

// Torres: cada array guarda discos (números del 1 al n)
let torres = { A: [], B: [], C: [] };
// Cola de movimientos [(origen, destino), …]
let movimientos = [];
// Parámetros de dibujo
let N = 3;               // número de discos actual
let anchoBase;           // ancho del disco más grande
let altoDisco = 20;      // altura fija de cada disco
let intervaloAnim = 500; // milisegundos entre movimientos

// Inicializa las tres torres y la lista de movimientos
function inicializarJuego(n) {
    N = n;
    torres.A = [];
    torres.B = [];
    torres.C = [];
    movimientos = [];

    // Calcular ancho máximo disponible para el disco más grande:
    // Dejamos 120px de margen (60px a cada lado) para evitar que sobrepase el canvas
    anchoBase = Math.min( (canvas.width - 120), n * 20 + 20 );

    for (let i = n; i >= 1; i--) {
        torres.A.push(i);
    }
    dibujarTorres();
}

// Empuja un disco de origen → destino en el objeto torres y repinta
function moverDisco(origen, destino) {
    if (torres[origen].length === 0) return;
    const disco = torres[origen].pop();
    torres[destino].push(disco);
    dibujarTorres();
}

// Dibuja las tres torres y los discos en su estado actual
function dibujarTorres() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Parametrización para centrar torres: 
    // Hay 3 torres, separadas equidistantemente
    const espacioEntreTorres = canvas.width / 3;
    const baseY = canvas.height - 50; // Línea de base donde se “apilan” discos

    Object.keys(torres).forEach((torre, idx) => {
        const xCentro = (idx + 0.5) * espacioEntreTorres;

        // Dibujar poste (mástil)
        ctx.fillStyle = "#333";
        ctx.fillRect(xCentro - 5, baseY - (N * altoDisco) - 10, 10, (N * altoDisco) + 10);

        // Dibujar cada disco de abajo hacia arriba
        torres[torre].forEach((disco, i) => {
            // Escalar ancho según el disco 'disco' en relación con N:
            // disco==N → ancho = anchoBase; disco==1 → ancho ≈ anchoBase / N
            const factor = disco / N;
            const anchoActual = factor * anchoBase;

            const xIzquierda = xCentro - anchoActual / 2;
            // i = 0 es el disco más bajo en la torre (posición 0 desde la base)
            const y = baseY - altoDisco * (i + 1);

            // Color variable (puedes ajustar la paleta)
            const intensidad = 50 + 20 * disco;
            ctx.fillStyle = `rgb(${intensidad}, ${100}, ${255 - intensidad})`;
            ctx.fillRect(xIzquierda, y, anchoActual, altoDisco);

            // Borde oscuro para resaltar
            ctx.strokeStyle = "#222";
            ctx.strokeRect(xIzquierda, y, anchoActual, altoDisco);
        });
    });
}

// Genera recursivamente la lista de movimientos (pero no los ejecuta aún)
function hanoi(n, origen, auxiliar, destino) {
    if (n === 1) {
        movimientos.push([origen, destino]);
        return;
    }
    hanoi(n - 1, origen, destino, auxiliar);
    movimientos.push([origen, destino]);
    hanoi(n - 1, auxiliar, origen, destino);
}

// Toma la lista movimientos[] y los ejecuta con setInterval
function ejecutarMovimientos() {
    let paso = 0;
    const total = movimientos.length;
    const anim = setInterval(() => {
        if (paso >= total) {
            clearInterval(anim);
            return;
        }
        const [origen, destino] = movimientos[paso];
        moverDisco(origen, destino);
        paso++;
    }, intervaloAnim);
}

// Función que lee el valor de #numDiscos y desencadena todo
function iniciarJuego() {
    const inputN = document.getElementById("numDiscos");
    let n = parseInt(inputN.value);
    if (isNaN(n) || n < 1) n = 1;
    if (n > 12) n = 12; // límite razonable para que quepa en el canvas (puedes ajustar)

    inicializarJuego(n);
    hanoi(n, "A", "B", "C");

    // Pequeña pausa antes de empezar la animación
    setTimeout(() => {
        ejecutarMovimientos();
    }, 500);
}

// Asociar el botón para que llame a iniciarJuego()
document.getElementById("btnIniciar").addEventListener("click", iniciarJuego);

// Al cargar la página, inicializamos con 3 discos por defecto
window.onload = () => {
    inicializarJuego(N);
};
