
const fs = require('fs');

const tablero = [   
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,    
];
let encontradoVacio = true;

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
        mostrarTablero(tablero)
    }
}

function comprobarMovimientos(){
    fs.readFile('configuracion.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Configuración inicial');
        console.log(data);
        console.log('\n');

        const lineas = data.split('\n');
        let movimientosLinea = lineas.find(linea => linea.includes('movimientos ='));
        let movimientoXLinea = lineas.find(linea => linea.includes('movimiento_X ='));
        let movimientoOLinea = lineas.find(linea => linea.includes('movimiento_O ='));
        let nuevoValor;

        fs.writeFile('configuracion.txt', nuevoValor, 'utf-8', err => {
            if (err) {
                console.error(`Error al escribir en el archivo: ${err}\n`);
            } else {
                fs.readFile('archivo.txt', 'utf-8', (err, newData) => {
                    if (err) {
                        console.error(`Error al leer el archivo: ${err}\n`);
                    } else {
                        console.log(`Contenido actualizado del archivo:\n ${newData}`);
                    }
                });
            }
        });
    });
}

function jugar(){
    
    verificarTablero(tablero)
    comprobarMovimientos()
    
}

jugar()
