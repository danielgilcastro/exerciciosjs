const prompt = require('prompt-sync')();
const PI = 3.14159265;
let r = parseFloat(prompt("Digite o raio da lata: "));
let h = parseFloat(prompt("Digite a altura da lata: "));
let v = PI * r * r * h;
console.log("Volume da lata de óleo:", v.toFixed(2));