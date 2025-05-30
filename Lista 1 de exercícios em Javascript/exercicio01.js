const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome completo? ', (nome) => {
    rl.question('Qual é o seu sexo? ', (sexo) => {
        console.log(`Nome completo: ${nome}`);
        console.log(`Sexo: ${sexo}`);
        rl.close();
    });
});