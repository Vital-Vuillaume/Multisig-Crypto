const secrets = require('secrets.js-grempe');
const prompt = require("prompt-sync")();

function stringToHex(str) {
    return Buffer.from(str, 'utf8').toString('hex');
}

const seed = prompt("Write your seed : ");

const fragments = prompt("Write your fragments : ");

const threshold = prompt("Write your threshold : ");

const seedHex = stringToHex(seed);

const shares = secrets.share(seedHex, fragments, threshold);

console.log("1. " + shares[0]);
console.log("2. " + shares[1]);
console.log("3. " + shares[2]);
console.log("4. " + shares[3]);
console.log("5. " + shares[4]);







function hexToString(hex) {
    return Buffer.from(hex, 'hex').toString('utf8');
}
// Reconstruction avec seulement 2 fragments
const reconstructedHex = secrets.combine(["8050a8ea05480203827c9a9191d43396345c8c17688e57e1b6af5a79cd80a92c46ab8b1ccebd82d6533fd297618d23923cdc1195c376eb0247fd78ab79d62a416a403362f29588018e747434eff98c1085c0836ae630083af767ec81684c04848f808c0891702131484c115182ad2e11ca3a364a2fffe53cd505d8b507989d75e5c6d8368c065e4b05699f79befd6ab241c6d040274776c4aa3215d0e80c15884db",
     "80256af0688e1e1fe0ce806ee5b6e1b24e93d3d71b2979ab95d76e51e2302ef48dbbae63e3d2a485be7d3e138028ab8d57f21a77f1b0caea57162412fbc2be8a642a88e4ae1915e697f8e3b71679b6ff164f6b087ceacb007c781de3ca591cf7796f819b404b25b9ab73af7afe2e688ec170236bbd1a7c12d82221221f1fd258c9571957dca6b2ee7455582056cd585ecfec945b26130aa7250b58fc717287c0fc3"]);

     
const reconstructedSeed = hexToString(reconstructedHex);

console.log("\nSeed reconstruite :", reconstructedSeed);
