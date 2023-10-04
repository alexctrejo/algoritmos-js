const readline = require("node:readline")
const fs = require("node:fs");

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

const tablero = [   
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,    
];
const jugador1 = 'X';
const jugador2 = 'O';
let encontradoVacio = true;
let turno = true;
let movimientos = 0

function verificarVictoria(tablero, jugador) {
    const lineasGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (const linea of lineasGanadoras) {
        const [a, b, c] = linea;
        if (tablero[a] === jugador && tablero[b] === jugador && tablero[c] === jugador) {
            return true; // El jugador ha ganado
        }
    }

    return false; // El jugador no ha ganado todavía
}

function actualizarTablero(pos) {
    if (tablero[pos] === 0) {
        tablero[pos] = turno ? jugador1 : jugador2;
        movimientos++;
        mostrarTablero(tablero);

        if (verificarVictoria(tablero, turno ? jugador1 : jugador2)) {
            const nuevaLinea = `¡Jugador ${turno ? '1 (X)' : '2 (O)'} ha ganado!`
            console.log(nuevaLinea);
            rl.close();
            fs.appendFile('configuracion.txt', nuevaLinea, 'utf-8', (err) => {
                if (err) {
                    console.error(`Error al escribir en el archivo: ${err}`);
                } else {
                    console.log('!Actualizacion!');
                }
            });
            return;
        }

        if (movimientos === 9) {
            console.log('Nadie gano dice pakotots!');
            rl.close();
            return;
        }

        turno = !turno;

        const movimiento = turno ? 'X' : 'O';
        const posicionEnTablero = pos + 1; // Sumamos 1 para mostrar posiciones de 1 a 9 en lugar de 0 a 8
        const nuevaLinea = `Movimiento ${movimiento} en posición ${posicionEnTablero}\n`;
        fs.appendFile('configuracion.txt', nuevaLinea, 'utf-8', (err) => {
            if (err) {
                console.error(`Error al escribir en el archivo: ${err}`);
            } else {
                console.log('\n!Actualizacion!');
            }
        });

        jugar();

    } else {
        console.log('Esa posición ya está ocupada. Inténtalo de nuevo.');
        jugar();
    }
}

function mostrarTablero(tablero) {
    console.log('Tablero Actual:');
    console.log(tablero.slice(0,3));
    console.log(tablero.slice(3,6));
    console.log(tablero.slice(6));
    console.log('\n');
}

function verificarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i] !== 0) {
            console.log(`Tienes un elemento en la posición ${i} con valor: ${tablero[i]}\n`);
            encontradoVacio = false;
            break;
        }
    }
    if (encontradoVacio){
        mostrarTablero(tablero);
    }
}

function jugar() {

    verificarTablero(tablero)

    rl.question(`Jugador ${turno ? '1 (X)' : '2 (O)'}, ¿en qué posición quieres jugar? (1-9): `, (pos) => {
        // Convierte la entrada del usuario a un índice de matriz (resta 1)
        const posicion = parseInt(pos) - 1;
        
        // Verifica si la entrada es válida (entre 1 y 9)
        if (posicion >= 0 && posicion < 9) {
            actualizarTablero(posicion);
        } else {
            console.log('Entrada no válida. Introduce un número entre 1 y 9.');
            jugar();
        }
    });
}

jugar();
