
let numeros = []; 
for (let index = 15; index <= 200; index++) {
    
    let numeral = index

    console.log(numeral,  (numeral * numeral));
    numeros.push(numeral = numeral * numeral);

    
}
console.log(numeros.join(" , "))