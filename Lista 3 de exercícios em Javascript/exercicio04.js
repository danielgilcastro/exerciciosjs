const prompt = require('prompt-sync')();
let n1 = parseFloat(prompt("Digite o 1º número: "));
let n2 = parseFloat(prompt("Digite o 2º número: "));
let n3 = parseFloat(prompt("Digite o 3º número: "));
let n4 = parseFloat(prompt("Digite o 4º número: "));
let mp = (n1*1 + n2*2 + n3*3 + n4*4) / (1+2+3+4);
console.log("Média aritmética ponderada:", mp.toFixed(2));