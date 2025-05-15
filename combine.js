const secrets = require('secrets.js-grempe');
const fs = require('fs');







const data = fs.readFileSync('./fragments.json', 'utf8');

const shares = JSON.parse(data);






function hexToString(hex) {
    return Buffer.from(hex, 'hex').toString('utf8');
}

const reconstructedSeed = hexToString(secrets.combine([shares[0], shares[1]]));

console.log("\nSeed reconstruite :", reconstructedSeed);