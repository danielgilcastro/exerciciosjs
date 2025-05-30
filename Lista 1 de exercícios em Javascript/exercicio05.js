const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite a temperatura em fahrenheit', (v1) => {

    const fahrenheit = parseFloat(v1);
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}`);


    rl.close();
});

