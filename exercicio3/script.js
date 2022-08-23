// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

let soma = function (num1, num2){
    return num1 + num2
}
console.log(soma(6, 6))

let subtração = function (num1, num2){
    return num1 - num2
}
console.log(subtração(6, 6))

let multiplicação = function (num1, num2){
    return num1 * num2
}
console.log(multiplicação(6, 6))

let divisão = function (num1, num2){
    return num1 / num2
}
console.log(divisão(6, 6))

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

let num1 = Number(prompt("Digite um Número"))
let num2 = Number(prompt("Digite outro Número"))

console.log(soma(num1, num2))
console.log(subtração(num1, num2))
console.log(multiplicação(num1, num2))
console.log(divisão(num1, num2))