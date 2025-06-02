let termos = 15;
let fibonacci = [1, 1];

for (let i = 2; i < termos; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]) 
}

console.log("Série de Fibonacci até o 15º termo:");
console.log(fibonacci.join(', '));