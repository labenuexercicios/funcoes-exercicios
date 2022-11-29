// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado.
// Invoque a função e imprima no console o resultado.

function soma(a, b) {
    console.log(a + b)    
}
soma(99, 1)

// const soma = (a, b) => {
//     console.log(a + b)
// }
// soma(1, 90)

// const soma = function(a, b) {
//     console.log(a + b)
// }
// soma(36,14)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

function maiorIgual(a, b){
    console.log(a >= b)
}

maiorIgual(10, 5)
maiorIgual(10, 10)
maiorIgual(10, 15)

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const par = (valor) => {
    if (valor % 2 == 0) {
        console.log(true)
    } else { 
        console.log(false)
    }
} 
par(5)

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.
function descontoINSS(salario) {
    console.log(salario - (0.1* salario))
}

descontoINSS(6500)