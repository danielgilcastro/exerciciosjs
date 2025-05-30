// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const a = Number(prompt("Digite o valor de a: "));
const b = Number(prompt("Digite o valor de b: "));
const c = Number(prompt("Digite o valor de c: "));
const arr = [a, b, c];
arr.sort((x, y) => x - y);
console.log(arr.join(", "));