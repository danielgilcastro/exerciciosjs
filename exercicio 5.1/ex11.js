let prompt = require('prompt-sync')();

let b = Number(prompt('Digite a base: ')); // base
let e = Number(prompt('Digite o expoente: ')); // expoente

let resultado;

if (e === 0) {
    resultado = 1;
} else if (b === 0 && e < 0) {
    console.log("Erro: zero não pode ser elevado a um expoente negativo (indeterminado).");
    process.exit(1);
} else {
    resultado = 1;
    for (let i = 0; i < Math.abs(e); i++) {
        resultado *= b;
    }
    if (e < 0) {
        resultado = 1 / resultado;
    }
}

console.log(`${b} elevado a ${e} é igual a ${resultado}`);