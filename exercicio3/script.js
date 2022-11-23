

//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão)


function soma(num1, num2) {
    return num1 + num2
}
function subtracao(num1, num2) {
    return num1 - num2

}
function multiplicacao(num1, num2) {
    return num1 * num2

}

function divisao(num1, num2) {
    return num1 / num2
}
//Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const var1= Number(prompt("digite um número"))
const var2= Number(prompt("digite um número"))

// Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
let sum=soma(var1, var2)
let sub=subtracao(var1, var2)
let mult=multiplicacao(var1, var2)
let div=divisao(var1, var2)


// Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console

console.log(`${var1} + ${var2} é igual a ${sum}`)
console.log(`${var1} - ${var2} é igual a ${sub}`)
console.log(`${var1} * ${var2} é igual a ${mult}`)
console.log(`${var1} / ${var2} é igual a ${div}`)