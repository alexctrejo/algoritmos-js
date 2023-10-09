import { readFile } from 'node:fs';

readFile('sql.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    
    const tokens = data
        .split(/(,|'|\(|\)|;|:|_|\s+|\.)/)
        .filter(token => token && !token.match(/^\s+$/));
    console.log(tokens);
       
});
   
   
   






