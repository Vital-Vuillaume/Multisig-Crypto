const secrets = require('secrets.js-grempe');
const fs = require('fs');
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

fs.writeFileSync('fragments.json', JSON.stringify(shares, null, 2), 'utf-8');