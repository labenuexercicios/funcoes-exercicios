
//Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(num1,num2) {
    console.log (`${num1} somado com ${num2} é igual ${num1 + num2}`)
}
soma(1,2)

//Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function comparação(num1,num2) {
    console.log (`${num1} maior ou igual ${num2} é ${num1 >= num2}`)
}
comparação(1,2)

//Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function pares(num) {
    console.log (`O ${num} é par ? ${num%2===0}`)
}
pares(5)

//Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

function INSS(salario) {
    console.log (`O seu salário com desconto é ${salario-(salario*0.10)}`) 
    
}
INSS(4000)