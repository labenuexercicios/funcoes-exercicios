//Letra A

function soma (numero1,numero2) {
    const operacao1 = numero1+numero2

    return operacao1
}


function subtracao (numero1,numero2) {
 const operacao2 = numero1-numero2

 return operacao2
}

function multiplicação (numero1,numero2) {
  const multiplicação = numero1*numero2

return multiplicação
}

function divisão (numero1,numero2) {
  const divisão = numero1/numero2

  return divisão
}

const numeroSolicitado1 = Number(prompt('Informe o primeiro numero'))
const numeroSolicitado2 = Number(prompt('Informe o segundo numero'))

const opSoma = soma(numeroSolicitado1,numeroSolicitado2)
const opSubtracao = subtracao(numeroSolicitado1,numeroSolicitado2)
const opMultiplicacao = multiplicação(numeroSolicitado1,numeroSolicitado2)
const opDivisao = divisão(numeroSolicitado1,numeroSolicitado2)

console.log(opSoma)
console.log(opSubtracao)
console.log(opMultiplicacao)
console.log(opDivisao)