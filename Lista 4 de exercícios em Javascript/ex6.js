// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const v1 = Number(prompt("Digite o primeiro valor: "));
const v2 = Number(prompt("Digite o segundo valor: "));
console.log(Math.abs(v1 - v2));