const prompt = require('prompt-sync')();
let cat1 = parseFloat(prompt("Digite o valor do 1º cateto: "));
let cat2 = parseFloat(prompt("Digite o valor do 2º cateto: "));
let hipotenusa = Math.sqrt(cat1*cat1 + cat2*cat2);
console.log("Valor da hipotenusa:", hipotenusa.toFixed(2));