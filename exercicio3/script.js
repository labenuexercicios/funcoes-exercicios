// # Exercício 3


// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de 
// uma das operações básicas (soma, subtração, multiplicação e divisão).
const somarNumero = (numero1, numero2) =>{
    let soma = numero1 + numero2
return numero1 + numero2
}

const subtrairNumero = (numero1, numero2) =>{
    let subtracao = numero1 - numero2
    return numero1 - numero2
}

const multiplicarNumero = (numero1, numero2) =>{
    let multiplicacao = numero1 * numero2
    return numero1 * numero2
}

const dividirNumero = (numero1, numero2) =>{
    let divisao = numero1 / numero2
    return numero1 / numero2
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
let digiteDoisNumero =Number(prompt('numero1'))
let digiteDoisNumero2 =Number(prompt('numero2'))
console.log(digiteDoisNumero, digiteDoisNumero2)

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
console.log(somarNumero(20,10))
console.log(subtrairNumero(20,10))
console.log(multiplicarNumero(20,10))
console.log(dividirNumero(20,10))


// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o 
// resultado das operações no console.
const resultadoSoma =Number ('30')
const resultadoSubtracao =Number ('10')
const resultadoMultiplicacao =Number ('200')
const resultadoDivisao =Number ('2')
console.log(`O resultado da soma entres os número foi: ${resultadoSoma}.
O resultado da subtração dos números foi:${resultadoSubtracao}.
O resultado da multiplicação dos número foi:${resultadoMultiplicacao}.
O resultado da divisão dos números foi:${resultadoDivisao}`)

