const prompt = require('prompt-sync')();
let razao = parseFloat(prompt("Digite a razão da PA: "));
let primeiro = parseFloat(prompt("Digite o 1º termo da PA: "));
let decimo = primeiro + (10 - 1) * razao;
console.log("O 10º termo da PA é:", decimo.toFixed(2));