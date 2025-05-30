const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PI = 3.14159265;

rl.question('Digite o valor do raio do círculo: ', (input) => {
    const raio = parseFloat(input);
    if (isNaN(raio) || raio < 0) {
        console.log('Por favor, digite um valor numérico válido para o raio.');
    } else {
        const area = PI * Math.pow(raio, 2);
        console.log(`A área do círculo é: ${area}`);
    }
    rl.close();
});