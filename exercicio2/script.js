// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(num1,num2){
return num1+num2
}
const retorno =somaNumeros(1,2)
console.log(retorno)


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function numeros(num1, num2){
    if (num1 >= num2) {
        console.log("o primeiro Maior ou igual")
    } else {
        console.log("o segundo valor é maior ou igual")
    }
}
numeros(10,9) 

// c) Uma função que receba um número e imprima se ele é par ou não



// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.