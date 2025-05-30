// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um valor inteiro: "));
console.log(Math.abs(valor));