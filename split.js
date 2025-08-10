const secrets = require('secrets.js-grempe');
const fs = require('fs');
const path = require('path');
const prompt = require("prompt-sync")();





const seed = prompt("Write your seed : ");

let fragments;
let threshold;

do {
    fragments = Number(prompt("Write your fragments numbers : "));
    threshold = Number(prompt("Write your threshold numbers : "));
} while(fragments < threshold);




function stringToHex(str) {
    return Buffer.from(str, 'utf8').toString('hex');
}

const seedHex = stringToHex(seed);

const shares = secrets.share(seedHex, fragments, threshold);





nameFile = prompt("Write the name of the files : ");

shares.forEach((share, index) => {
    const saveFolder = prompt(`Enter folder path to save share ${index + 1}: `);
    fs.mkdirSync(saveFolder, { recursive: true });

    const fileName = path.join(saveFolder, `${nameFile + (index + 1)}.txt`);
    fs.writeFileSync(fileName, share, 'utf8');
});


console.log("\nIt worked!");