import { readFile } from 'node:fs';

readFile('sql.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    
    const tokens = data
        //Separa primero por todos los caracteres que estan aqui debajo
        .split(/(,|'|\(|\)|;|:|_|\s+|\.)/)
        // verifica si el token no está vacío y no consiste solo en espacios en blanco
        .filter((token) => token && !token.match(/^\s+$/));
    console.log(tokens);
       
});
   
   
   






