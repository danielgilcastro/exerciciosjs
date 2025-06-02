let pronpt = require('prompt-sync')();


let n = pronpt('Digite um número inteiro menor ou igual a 50: ');

if (isNaN(n) || n > 50 || n < 1) {
    console.log('Número inválido. Digite um número entre 1 e 50.');
} else {
    let produto = n;
    while (produto < 250) {
        console.log(produto);
        produto *= 3;
    }
}