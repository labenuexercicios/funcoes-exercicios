// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
function sumNumbers(num1, num2) {
    return num1 + num2;
};

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function whoIsBigger(num1, num2) {
    return num1 >= num2;
};

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
function parOrImpar(num1) {
    return `O numero é par?: ${num1 % 2 === 0}`;
};

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
function calculateSalary(salaryBase) {
    let salaryTotal = salaryBase + (salaryBase * 0.10);
    return salaryTotal
}

console.log(sumNumbers(8, 5));
console.log(whoIsBigger(700, 458));
console.log(parOrImpar(8));  
console.log(calculateSalary(8459.00)); 
