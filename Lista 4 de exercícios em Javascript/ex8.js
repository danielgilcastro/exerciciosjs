// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número inteiro: "));
if (numero >= 1 && numero <= 10) {
    console.log("Está na faixa de 1 a 10");
} else {
    console.log("Não está na faixa de 1 a 10");
}