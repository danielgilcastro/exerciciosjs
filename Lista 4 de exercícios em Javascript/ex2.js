// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const resposta = prompt("Qual a capital do Brasil? ");
if (resposta.trim().toLowerCase() === "brasília" || resposta.trim().toLowerCase() === "brasilia") {
    console.log("Resposta certa");
} else {
    console.log("Resposta errada");
}