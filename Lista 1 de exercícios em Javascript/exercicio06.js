const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('digite um número: ', (v1) => {
    rl.question('digite um número: ', (v2) => {
        rl.question('digite um número: ', (v3) => {

                const n1 = parseFloat(v1);
                const n2 = parseFloat(v2);
                const n3 = parseFloat(v3);
                const media = (n1 + n2 + n3) / 3;
                console.log(`A média aritmética é: ${media}`);

            rl.close();
        });
    });
});

