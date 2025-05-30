const prompt = require('prompt-sync')();
let valor1 = parseFloat(prompt("Digite o primeiro valor real: "));
let valor2 = parseFloat(prompt("Digite o segundo valor real: "));
let valor1ComAcrescimo = valor1 * 1.3;
let valor2ComDesconto = valor2 * 0.75;
console.log("Primeiro valor com acréscimo de 30%:", valor1ComAcrescimo.toFixed(2));
console.log("Segundo valor com desconto de 25%:", valor2ComDesconto.toFixed(2));