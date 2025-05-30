const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somarArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += parseFloat(array[i]);
    }
    return soma;
}
function multiplicarArray(array) {
    let produto = 1;
    for (let i = 0; i < array.length; i++) {
        produto *= parseFloat(array[i]);
    }
    return produto;
}

rl.question('Escreva o valor Valor1? ', (v1) => {
    rl.question('Escreva o valor Valor2 ', (v2) => {
        rl.question('Escreva o valor Valor3 ', (v3) => {
            rl.question('Escreva o valor Valor4 ', (v4) => {

                console.log("A som é: ",somarArray([v1, v2, v3, v4]))
                console.log("resultado da soma em Dollar ",somarArray([v1, v2, v3, v4]) * 5.7)

                console.log("A multiplicação é: ",multiplicarArray([v1, v2, v3, v4]))
                console.log("A multiplicação em Dollar: ",multiplicarArray([v1, v2, v3, v4]) * 5.7)



                rl.close();
            });
        });
    });
});