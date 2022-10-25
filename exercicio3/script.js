/*  Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console. */

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))


const soma = (num1, num2) => {
    const somar = num1 + num2
    return `O valor da soma de ${num1} e ${num2} é ${somar}`
}

const resultadoSoma = soma(primeiroNumero, segundoNumero)
console.log(resultadoSoma)


const subtracao = (num1, num2) => {
    const subtrair = num1 - num2
    return `O valor da subtração de ${num1} e ${num2} é ${subtrair}`
}
const resultadoSubtracao = subtracao(primeiroNumero, segundoNumero)
console.log(resultadoSubtracao)

const muntilplicacao = (num1, num2) => {
    const multiplicar = num1 * num2
    return `O valor da multiplicação de ${num1} e ${num2} é ${multiplicar}`
}
const resultadoMultiplicacao = muntilplicacao(primeiroNumero, segundoNumero)
console.log(resultadoMultiplicacao)


const divisao = (num1, num2) => {
    const dividir = num1 / num2
    return `O valor da multiplicação de ${num1} e ${num2} é ${dividir}`
}
const resultadoDivisao = divisao(primeiroNumero, segundoNumero)
console.log(resultadoDivisao)
