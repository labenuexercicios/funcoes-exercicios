// EXERCÍCIO 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e
// retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function numerosA (num1, num2) {
    return num1 + num2
}

function numerosB (num1, num2) {
    return num1 - num2
}

function numerosC (num1, num2) {
    return num1 * num2
}

function numerosD (num1, num2) {
    return num1 / num2
}

// Em seguida, peça para o usuário inserir dois números e chame essas
// 4 funções com esses valores inputados pelo usuário sendo o argumento.
// Por fim, imprima no console o resultado das operações

let numero1 = Number(prompt("Insira um número"))
let numero2 = Number(prompt("Insira outro número"))

console.log(numerosA(numero1, numero2))
console.log(numerosB(numero1, numero2))
console.log(numerosC(numero1, numero2))
console.log(numerosD(numero1, numero2))