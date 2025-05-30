const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('digite a distancia: ', (v1) => {

    rl.question('Digite o consumo médio do automóvel (km/l): ', (consumo) => {
        const distancia = parseFloat(v1);
        const consumoMedio = parseFloat(consumo);

        if (isNaN(distancia) || isNaN(consumoMedio) || consumoMedio === 0) {
            console.log('Valores inválidos.');
        } else {
            const litros = distancia / consumoMedio;
            console.log(`Quantidade de litros necessários: ${litros.toFixed(2)}`);
        }
        rl.close();
    });

});

