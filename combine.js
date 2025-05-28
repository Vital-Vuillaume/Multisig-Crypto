const secrets = require('secrets.js-grempe');
const fs = require('fs');
const prompt = require("prompt-sync")();
 
 
 
 
 
const data = fs.readFileSync('./fragments.json', 'utf8');
 
const shares = JSON.parse(data);
 
 
 
 
 
function hexToString(hex) {
    return Buffer.from(hex, 'hex').toString('utf8');
}
 
let thresholdNb;
 
do {
    thresholdNb = prompt("Write your threshold numbers for combine : ");
} while(thresholdNb > shares.length);
 
 
const selectedShares = shares.slice(0, thresholdNb);
const reconstructedSeed = hexToString(secrets.combine(selectedShares));
 
 
console.log("\nSeed reconstruite :", reconstructedSeed);