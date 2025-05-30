// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um valor inteiro: "));
if (valor % 4 === 0 && valor % 5 === 0) {
    console.log(valor);
} else {
    console.log("Valor não é divisível por 4 e 5");
}