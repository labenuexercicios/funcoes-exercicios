// EXERCÍCIO 2

//Declare e chame as funções abaixo:

console.log("a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.")

function numerosA (num1, num2){
    return num1 + num2
}
console.log(numerosA(10, 10));

console.log("b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.")

function numerosB(num1, num2) {
    return num1 >= num2
}
console.log(numerosB(10, 20));

console.log("c) Uma função que receba um número e imprima se ele é par ou não.")

function numeroC (num1) {
    return num1%2 === 0
}
console.log(numeroC(9));

console.log("d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.")

function mensagem(texto) {
    console.log(texto.length)
    console.log(texto.toUpperCase())
}
mensagem('oi, pessoal!')