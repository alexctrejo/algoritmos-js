const fs = require('node:fs')

const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', "", '', '\n', '\r']; 
const palabras = [];
let palabraActual = "";

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);

    for (let i = 0; i < data.length - 1; i++) {
        if (simbolos.includes(data[i])) {
            if (palabraActual.length > 0) {
                //falta añadir restricciones y cuando separar u no hacerlo.
                if ( data[i] == "." && data[i + 1].match(/[a-zA-Z]/) ) {
                    palabraActual += data[i];
                } else {
                    palabras.push(palabraActual);
                }
                palabras.push(data[i]);
                palabraActual = ""; 
            } else {
                palabras.push(data[i]);
            }
        } else {
            palabraActual += data[i];
        }
    }
    console.log(palabras);

});
