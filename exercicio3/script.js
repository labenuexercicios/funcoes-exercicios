// EXERCICIO 3 

//a)
function numeroSoma (numeroSoma1 ,numeroSoma2){
    const soma = (numeroSoma1 + numeroSoma2)
    console.log (`A soma dos números é: ${soma}`)
}

function numeroSub (numeroSub1, numeroSub2){
    const subtracao = (numeroSub1 - numeroSub2)
    console.log (`A subtração dos números é: ${subtracao}`)    
}

function numeroMult (numeroMult1, numeroMult2){
    const multiplicacao = (numeroMult1 * numeroMult2)
    console.log (`A multiplicação dos números é: ${multiplicacao}`)
}

function numeroDiv (numeroDiv1, numeroDiv2){
    const divisao = (numeroDiv1 / numeroDiv2)
    console.log (`A divisão entre os números é: ${divisao}`)
}

numeroSoma(15,6)
numeroSub(15,6)
numeroMult(15,6)
numeroDiv(15,6)

//b)
const numeroSolicitado1 = Number(prompt("Informe o primeiro numero"))
const numeroSolicitado2 = Number(prompt("Imforme o segundo numero"))

//c) e d)

const opSoma = numeroSoma(numeroSolicitado1, numeroSolicitado2)
const opSub = numeroSub(numeroSolicitado1, numeroSolicitado2)
const opMult = numeroMult(numeroSolicitado1, numeroSolicitado2)
const opDiv = numeroDiv(numeroSolicitado1, numeroSolicitado2)


