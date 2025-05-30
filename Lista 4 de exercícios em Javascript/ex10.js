// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
if (n2 !== 0 && n1 % n2 === 0) {
    console.log("O segundo número é divisor do primeiro");
} else {
    console.log("O segundo número não é divisor do primeiro");
}