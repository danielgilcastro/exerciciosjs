// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número: "));
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Nulo");
}