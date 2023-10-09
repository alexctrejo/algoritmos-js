import { readFile } from 'node:fs';

readFile('sql.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    
    const keywords = /^(SELECT|FROM|WHERE|CREATE|PROCEDURE|BEGIN|END)$/i;
    const operators = /^(=|,|'|;)$/;

    const tokens = data.split(/\s+/).filter(token => token.length > 0);

    tokens.map(token => {
        if(token.match(keywords)){
            console.log('wachapen')
        }
    })
    
})






