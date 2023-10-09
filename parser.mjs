import { readFile } from 'node:fs';

readFile('sql.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    
       
    const keywords = /^(SELECT|FROM|WHERE|CREATE|PROCEDURE|BEGIN|END)$/i;
    const operators = /^(=|,|'|;|\(|\)|@)$/;
   
    
    const tokens = data
        .split(/(\bSELECT\b|\bFROM\b|\bWHERE\b|\bCREATE\b|\bPROCEDURE\b|\bBEGIN\b|\bEND\b|,|'|\(|\)|;|\s+)/)
        .filter(token => token && !token.match(/^\s+$/));

    console.log(tokens);
       
    tokens.map(token => {
        if (token.match(keywords)) {
            console.log(`Palabra reservada: ${token}`);
        } else if (token.match(operators)) {
            console.log(`Operador: ${token}`);
        } else {
            console.log(`Palabra: ${token}`);
        }
    });
});
   
   
   






