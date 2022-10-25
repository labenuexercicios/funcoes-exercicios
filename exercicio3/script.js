// Exercicio 03
// a)

function soma(num1,num2) {
    return num1 + num2
}
function subtracao(num1,num2) {
    return num1 - num2
}
function multiplicacao(num1,num2) {
    return num1 * num2
}
function divisao(num1,num2) {
    return num1 / num2
}


let valor1 = Number (prompt("Informe um número:"))
let valor2 = Number (prompt("Informe um segundo número"))


let resultSoma =soma(valor1,valor2)
let resultSubtracao= subtracao(valor1,valor2)
let resultMultiplicacao= multiplicacao(valor1,valor2)
let resultDivisao= divisao(valor1,valor2)

console.log(resultSoma)
console.log(resultSubtracao)
console.log(resultMultiplicacao)
console.log(resultDivisao)
