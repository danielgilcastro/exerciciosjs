const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function perguntar() {
    rl.question('Digite um número real (-1 para sair): ', (input) => {
        let num = parseFloat(input);
        if (num === -1) {
            if (numeros.length === 0) {
                console.log('Nenhum número foi digitado.');
            } else {
                const maior = Math.max(...numeros);
                const menor = Math.min(...numeros);
                const media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
                console.log(`Maior número: ${maior}`);
                console.log(`Menor número: ${menor}`);
                console.log(`Média: ${media}`);
            }
            rl.close();
        } else if (!isNaN(num)) {
            numeros.push(num);
            perguntar();
        } else {
            console.log('Por favor, digite um número válido.');
            perguntar();
        }
    });
}

perguntar();