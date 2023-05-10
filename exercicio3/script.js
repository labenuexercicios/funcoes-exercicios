// # Exercício 3


// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

const operacaoSoma = (numero1, numero2) => {
    const soma = numero1 + numero2
    return `A soma é = ${soma}`
}

const operacaoSubtracao = (numero1, numero2) => {
    const subtracao = numero1 - numero2
    return `A subtração é = ${subtracao}`
}

const operacaoMultiplicacao = (numero1, numero2) => {
    const multiplicacao = numero1 * numero2
    return `A multiplicação é = ${multiplicacao}`
}

const operacaoDivisao = (numero1, numero2) => {
    const divisao = numero1 / numero2
    return `A divisão é = ${divisao}`
}


// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let numero1 = Number(prompt(`Digite um número`))
let numero2 = Number(prompt(`Digite outro número`))
console.log(numero1)
console.log(numero2)

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

operacaoSoma(numero1,numero2)
operacaoSubtracao(numero1,numero2)
operacaoMultiplicacao(numero1,numero2)
operacaoDivisao(numero1,numero2)


// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const somaFinal = operacaoSoma(numero1,numero2)
console.log(somaFinal)

const subtracaoFinal = operacaoSubtracao (numero1,numero2)
console.log(subtracaoFinal)

const multiplicacaoFinal = operacaoMultiplicacao (numero1,numero2)
console.log(multiplicacaoFinal);

const divisaoFinal = operacaoMultiplicacao (numero1,numero2)
console.log(divisaoFinal);