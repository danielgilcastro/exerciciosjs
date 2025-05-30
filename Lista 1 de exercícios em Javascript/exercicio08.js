const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('digiteum número: ', (v1) => {

    console.log("o número digitado foi: " + v1);
    console.log("o número ao quadrado: " + v1 * v1);
    console.log("a raiz quadrada do número: " + Math.sqrt(v1));
    rl.close();


});

