function somar(number1, number2) {
    return number1 + number2
}
function subtrair(number1, number2){
    return number1 - number2
}

const multiplicar = (number1, number2) => {
    return number1 * number2
}

const dividir = function (number1, number2) {
    return number1 / number2
}

let recebido = parseInt(prompt("insira o primeiro numero "))
let recebido2 = parseInt(prompt("insira o segundo numero "))

let soma = somar(recebido, recebido2)
let subtracao = subtrair(recebido, recebido2)
let multiplicacao = multiplicar(recebido, recebido2)
let divisao = dividir(recebido, recebido2)

console.log("soma:", soma)
console.log("subtração:", subtracao)
console.log("multiplicacão:", multiplicacao)
console.log("divisão:", divisao)