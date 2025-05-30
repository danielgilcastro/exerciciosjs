const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite o salario', (v1) => {


    console.log(`Salariocom aumento : ${parseFloat(v1) * 1.15}`);

    rl.close();
});

