const fs = require('fs');
const { reglasSintacticas } = require('./reglasSintacticas');

const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', '', '', '\n', '\r', "'", '"'];
const palabras = [];
const tokens = [];
let palabraActual = "";

fs.readFile('select.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    for (let i = 0; i < data.length; i++) {
        if (simbolos.includes(data[i])) {
            if (palabraActual.length > 0) {
                palabras.push(palabraActual);
                palabraActual = "";
            }
            if (data[i] !== ' ') {  // Evitar agregar espacios adicionales
                palabras.push(data[i]);
            }
        } else {
            palabraActual += data[i];
        }
    }

    // Si hay una palabra al final sin espacio, agrégala
    if (palabraActual.length > 0) {
        palabras.push(palabraActual);
    }
});

// Asignación de tokens
fs.readFile('sqlkeywords.txt', 'utf-8', (err, data) => {
    console.log(palabras);
    if (err) {
        console.log(err);
    }
    // Separación de los keywords por salto de línea
    const keywords = data.split('\n');
    // Recorrer las palabras y comparar con los keywords
    for (let i = 0; i < palabras.length; i++) {
        let esPalabraReservada = false;

        // Verificar si es una palabra reservada
        for (let j = 0; j < keywords.length; j++) {
            let [id, , valor] = keywords[j].split(' ');
            if (palabras[i] === valor) {
                tokens.push(id);
                esPalabraReservada = true;
                break;
            }
        }

        // Si no es una palabra reservada, considerarla como una cadena o número no reconocido
        if (!esPalabraReservada) {
            if (!isNaN(parseFloat(palabras[i])) && isFinite(palabras[i])) {
                // Es un número, agregar el token correspondiente
                tokens.push('98'); // Puedes usar otro código, como '98', para representar números no reconocidos
            } else {
                // Es una cadena no reconocida
                tokens.push('99'); // Puedes usar otro código, como '99', para representar cadenas no reconocidas
            }
        }
    }

    console.log(tokens);

    // Ajustar la lógica según la regla sintáctica.
    let regla = [];
    if (tokens[0] == 655) {
        regla = reglasSintacticas["SELECT"];
    } else if (tokens[0] == 772){
        regla = reglasSintacticas["UPDATE"];
    } else if (tokens[0] == 360){
        regla = reglasSintacticas["INSERT INTO"];
    } else if (tokens[0] == 197){
        regla = reglasSintacticas["CREATE"];
    } else if (tokens[0] == 229){
        regla = reglasSintacticas["DELETE"];
    } else {
        console.log("No se reconoce la regla sintáctica");
    }
    for (let k = 0; k < regla.length; k++) {
        console.log(`token ${regla[k]} VALIDO`);
    }
});
