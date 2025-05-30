const prompt = require('prompt-sync')();

const valorHora = parseFloat(prompt('Informe o valor da hora aula: R$ '));
const horasTrabalhadas = parseFloat(prompt('Informe o número de horas trabalhadas no mês: '));
const percentualINSS = parseFloat(prompt('Informe o percentual de desconto do INSS (%): '));

const salarioBruto = valorHora * horasTrabalhadas;

const descontoINSS = salarioBruto * (percentualINSS / 100);

const salarioLiquido = salarioBruto - descontoINSS;

console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Desconto INSS: R$ ${descontoINSS.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);