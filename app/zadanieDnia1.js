const fs = require('fs');
const crypto = require('crypto');

fs.readFile(testFile,'utf8', (err, data) => {
    if (err === null){
        console.log(data)
    }else{
         console.log('błąd odczytu', err);
    }
    });