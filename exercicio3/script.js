// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
let number1 = Number(prompt("Digite um numero:"));
let number2 = Number(prompt("Digite outro numero:"));

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
sum(number1, number2);
subtract(number1, number2);
multiply(number1, number2);
divide(number1, number2);

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
resultSum = sum(number1, number2);
resultSubtract = subtract(number1, number2);
resultMultiply = multiply(number1, number2);
resultDivide = divide(number1, number2);

console.log(`Soma: ${resultSum}`);
console.log(`Resta: ${resultSubtract}`);
console.log(`Multiplicação: ${resultMultiply}`);
console.log(`Divissão: ${resultDivide}`);