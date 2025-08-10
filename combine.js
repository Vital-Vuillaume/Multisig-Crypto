const secrets = require('secrets.js-grempe');
const fs = require('fs');
const prompt = require("prompt-sync")();
 
 
 
 
 

 
 
 
 
 
let thresholdNb;
 
do {
    thresholdNb = Number(prompt("Write your threshold number for combine: "));
} while (isNaN(thresholdNb) || thresholdNb < 1);




let shares = [];

for (let i = 0; i < thresholdNb; i++) {
    let filePath;
    do {
        filePath = prompt(`Enter full path for share file ${i + 1}: `);
    } while (!(fs.existsSync(filePath)))

    const shareContent = fs.readFileSync(filePath, 'utf8').trim();
    shares.push(shareContent);
}




function hexToString(hex) {
    return Buffer.from(hex, 'hex').toString('utf8');
}

const selectedShares = shares.slice(0, thresholdNb);
const reconstructedSeed = hexToString(secrets.combine(selectedShares));


console.log("\nSeed reconstruite :", reconstructedSeed);