const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite um número inteiro ', (v1) => {
    console.log(`antecessor: ${parseInt(v1) - 1}`);
    console.log(`numero digitado: ${parseInt(v1) }`);
    console.log(`sucessor: ${parseInt(v1) + 1}`); 
    rl.close();
});

