function somarNumeros (numero1, numero2){
    const soma = numero1 + numero2
    const fraseSoma = `A soma dos números será:${soma}`
    return fraseSoma
}

function subtrairNumeros(numero1, numero2){
const subtracao = numero1 - numero2
const fraseSubtracao = `A subtração dos números será:${subtracao}`
return fraseSubtracao
}

function multiplicarNumero (numero1, numero2){
const multiplicacao = numero1 * numero2
const fraseMultiplicacao = `A multiplicação dos números será:${multiplicacao}`
return fraseMultiplicacao
}

function dividirNumero(numero1, numero2){
    const divisao = numero1 / numero2
    const fraseDivisao = `A divisão dos números será: ${divisao}`
    return fraseDivisao
}

let numero1 = Number(prompt(`Digite um número:`))
let numero2 = Number(prompt(`Digite outro número:`))

const resultadoSoma = somarNumeros(numero1, numero2)
const resultadoSubtracao = subtrairNumeros(numero1, numero2)
const resultadoMultiplicacao = multiplicarNumero(numero1, numero2)
const resultadoDivisao = dividirNumero(numero1, numero2)

console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)