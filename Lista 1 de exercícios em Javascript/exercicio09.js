const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Valor da Prestação: ', (valor) => {
    rl.question('Taxa de juros (% ao dia): ', (taxa) => {
        rl.question('Tempo em atraso (dias): ', (tempo) => {
            const v = parseFloat(valor);
            const t = parseFloat(taxa);
            const d = parseInt(tempo, 10);
            const prestacao = v + (v * (t / 100) * d);
            console.log(`Valor da prestação em atraso: R$ ${prestacao.toFixed(2)}`);
            rl.close();
        });
    });
});

