// É necessário executar: npm install prompt-sync
const prompt = require("prompt-sync")();
const nums = [];
for (let i = 0; i < 5; i++) {
    nums.push(Number(prompt(`Digite o ${i + 1}º número: `)));
}
console.log("Maior:", Math.max(...nums));
console.log("Menor:", Math.min(...nums));