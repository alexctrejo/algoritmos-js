/* 
* Analizador léxico 
* Created by Alexander Contreras
* 7/10/2023
*
*
*/

const fs = require('node:fs');

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    let splitData = data.split('\n');
    for (let i = 0; i < splitData.length; i++) {
        console.log(splitData[0]);
    }
});


