const prompt = require('prompt-sync')();
let a = prompt("Digite o valor de a: ");
let b = prompt("Digite o valor de b: ");
let temp = a;
a = b;
b = temp;
console.log("Valores trocados: a =", a, ", b =", b);