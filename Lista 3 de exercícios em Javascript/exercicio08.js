const prompt = require('prompt-sync')();
let base = parseFloat(prompt("Digite a base do retângulo: "));
let altura = parseFloat(prompt("Digite a altura do retângulo: "));
let perimetro = 2 * (base + altura);
let area = base * altura;
let diagonal = Math.sqrt(base*base + altura*altura);
console.log("Perímetro:", perimetro.toFixed(2));
console.log("Área:", area.toFixed(2));
console.log("Diagonal:", diagonal.toFixed(2));