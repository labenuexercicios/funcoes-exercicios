

// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

const soma = (numeroSoma1, numeroSoma2) => {
    return numeroSoma1 + numeroSoma2
}

// soma(2, 4)

function subtracao(numeroSub1, numeroSub2){
    return numeroSub1 - numeroSub2
}

// subtracao(5, 3)

function multiplicação(numeroMult1, numeroMult2){
    return numeroMult1 * numeroMult2
}

// multiplicação(3,5)

function divisao(numeroDivisao1, numeroDivisao2){
    return numeroDivisao1/numeroDivisao2
}

// divisao(10, 2)

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

const resultadoSoma = soma(numero1, numero2)
console.log(resultadoSoma)

const resultadoSub = subtracao(numero1, numero2)
console.log(resultadoSub)

const resultadoMult = multiplicação(numero1, numero2)
console.log(resultadoMult)

const resultadoDivisao = divisao(numero1, numero2)
console.log(resultadoDivisao)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

console.log(`${numero1} mais ${numero2} é igual a ${resultadoSoma}`)
console.log(`${numero1} menos ${numero2} é igual a ${resultadoSub}`)
console.log(`${numero1} vezes ${numero2} é igual a ${resultadoMult}`)
console.log(`${numero1} dividido por ${numero2} é igual a ${resultadoDivisao}`)



