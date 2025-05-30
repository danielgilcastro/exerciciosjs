// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número: "));
if (numero > 20) {
    console.log(numero / 2);
} else {
    console.log(numero);
}