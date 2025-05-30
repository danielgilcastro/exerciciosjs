// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número de 3 dígitos: "));
console.log(Math.floor(Math.abs(numero) / 100));