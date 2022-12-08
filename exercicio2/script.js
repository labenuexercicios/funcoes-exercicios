// a) Uma função que receba 2 números como parâmetros, e, 
// dentro da função, faça a soma das duas entradas e imprima o resultado. 
// Invoque a função e imprima no console o resultado.


function numeros(numero1, numero2) {
    console.log("A soma de dos números é:", (numero1 + numero2))
}

numeros(80, 30)

// b) Uma função que recebe 2 números e imprime um booleano que informa
// se o primeiro número é **maior ou igual** ao segundo.

function numerosB(numero3, numero4) {
    console.log("O primeiro número é maior que o segundo?", (numero3 >= numero4))
}

numerosB(60, 80)

// c) Uma função que receba um número e imprima no console um boleano
// informando se o número é par ou não.

function numerosC(numero5) {

    if (numero5 % 2 === 0) {

        console.log(numero5 % 2 === 0)
    } else {

        console.log(numero5 % 2 === 0)
    }
}

numerosC(71)

// d) Uma função que receba um valor de salário e retorne o 
// valor com o desconto 10% referente ao INSS.  

function salario(salario1) {
    console.log(salario1 - (salario1 * 0.10))
}

salario(1400)