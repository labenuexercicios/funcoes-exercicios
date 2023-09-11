const numero1 = +prompt("Insira o primeiro número")
const numero2 = +prompt("Insira o segundo número")

function soma(num1, num2){
    const calculo = num1 + num2
    return `A soma do número ${num1} com o número ${num2} é: ${calculo}`
}

function subtracao(num1, num2){
    const calculo = num1 - num2
    return `A subtração do número ${num1} com o número ${num2} é: ${calculo}`
}

function multiplicacao(num1, num2){
    const calculo = num1 * num2
    return `A multiplicação do número ${num1} com o número ${num2} é: ${calculo}`
}

function divisao(num1, num2){
    const calculo = num1 / num2
    return `A divisão do número ${num1} com o número ${num2} é: ${calculo}`
}

const resultadoSoma = soma(numero1, numero2)
const resultadoSubtracao = subtracao(numero1, numero2)
const resultadoMultiplicacao = multiplicacao(numero1, numero2)
const resultadoDivisao = divisao(numero1, numero2)

console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)
console.log(soma(10, 20))
console.log(subtracao(10, 20))
console.log(multiplicacao(10, 20))
console.log(divisao(10, 20))