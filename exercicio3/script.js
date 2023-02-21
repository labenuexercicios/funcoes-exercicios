//EXERCICIO 3 - A


function opSoma(num1, num2) {

    const soma = num1 + num2
    return(soma)

}

function opSubtracao(num1, num2) {

    const subtracao = num1 - num2
    return(subtracao)

}

function opMultiplicacao(num1, num2){

    const multipliacao = num1 * num2;
    return(multipliacao)

}

function opDivisao(num1, num2){

    const divisao = num1 / num2;
    return(divisao)

}


//EXERCICIO 3 - B

const numero1 = Number(prompt('Digite o primeiro número:'))
const numero2 = Number(prompt('Digite o segundo número:'))

//EXERCICIO 3 - C

const somatorio = opSoma(numero1, numero2)
const subtra = opSubtracao(numero1, numero2)
const multi = opMultiplicacao(numero1, numero2)
const dividir = opDivisao(numero1, numero2)

//EXERCICIO 3 - D

console.log(`O primeiro número é: ${numero1} e o segundo número é: ${numero2}`)

console.log(`O resultado da soma é: ${somatorio.toFixed(2)}`)
console.log(`O resultado da subtração é: ${subtra.toFixed(2)}`)
console.log(`O resultado da multiplicação é: ${multi.toFixed(2)}`)
console.log(`O resultado da divisão é: ${dividir.toFixed(2)}`)

