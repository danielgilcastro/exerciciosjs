const prompt = require('prompt-sync')();
let razao = parseFloat(prompt("Digite a razão da PG: "));
let primeiro = parseFloat(prompt("Digite o 1º termo da PG: "));
let quinto = primeiro * Math.pow(razao, 5 - 1);
console.log("O 5º termo da PG é:", quinto.toFixed(2));