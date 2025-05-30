// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número: "));
if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}