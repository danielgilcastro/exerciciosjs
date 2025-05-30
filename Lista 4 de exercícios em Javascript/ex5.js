// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const n1 = Number(prompt("Digite a primeira nota: "));
const n2 = Number(prompt("Digite a segunda nota: "));
const n3 = Number(prompt("Digite a terceira nota: "));
const n4 = Number(prompt("Digite a quarta nota: "));
const media = (n1 + n2 + n3 + n4) / 4;
if (media >= 5) {
    console.log("Aprovado. Média:", media);
} else {
    console.log("Reprovado. Média:", media);
}