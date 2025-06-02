
let numeros = []; 
for (let index = 1; index <= 100; index++) {
    numeros.push(index);
}

let soma = numeros.reduce((acc, curr) =>{console.log(acc , curr);return acc + curr}, 0);


// console.log("A soma dos números do array é:", soma);
