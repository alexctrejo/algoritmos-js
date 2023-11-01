const fs = require('node:fs')

const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', "", '', '\n', '\r', "'", '"']; 
const palabras = [];
let palabraActual = "";

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);

    for (let i = 0; i < data.length; i++) {
        if (simbolos.includes(data[i])) {
            if (palabraActual.length > 0) {
                palabras.push(palabraActual);
                palabraActual = ""; 
            } else {
                palabras.push(data[i]);
            }
        } else {
            palabraActual += data[i];
        }
    }
});

//Asignación de tokens
fs.readFile('sqlkeywords.txt', 'utf-8', (err, data) => {
        console.log(palabras);
        if (err) {
            console.log(err);
        }
        //separación de los keywords por salto de linea
        const keywords = data.split('\n');
        //recorrer las palabras y comparar con los keywords
        for (let i = 0; i < palabras.length; i++) {
            for (let j = 0; j < keywords.length; j++) {
                //asignar el id del keyword a la palabra
                let [id,  , valor] = keywords[j].split(' ');
                //comparar la palabra con el valor del keyword y imprimir el id
                if (palabras[i] == valor) {
                    console.log(id);
                }
                if (data[i] == typeof(Number)) {
                    palabraActual += data[i];
                    console.log(palabraActual + " es un numero");
                }
            }
        }
    }
);