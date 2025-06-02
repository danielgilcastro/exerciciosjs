let pronpt = require('prompt-sync')();

let numero = pronpt('Digite um número: ');
let Limite = pronpt('Digite um número de limite: ');

for (let index = 0; index < Limite; index++) {
    console.log(`${numero} . ${index + 1} = ${numero * (index + 1)}`);
}