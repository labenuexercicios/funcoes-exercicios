// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
function soma(num1,num2){
    return Number((num1+num2))
}
//console.log (`a) SOMA DOS NÚMEROS ESCOLHIDOS = ${soma(4,2)}`)

function subtracao(num1,num2){
    return Number((num1-num2))
}
//console.log (`b) SUBTRAÇÃO DOS NÚMEROS ESCOLHIDOS = ${subtracao(4,2)}`)

function multiplicacao(num1,num2){
    return Number((num1*num2))
}
//console.log (`c) MULTIPLICAÇÃO DOS NÚMEROS ESCOLHIDOS = ${multiplicacao(4,2)}`)

function divisao(num1,num2){
    return Number((num1/num2))
}
//console.log (`d) DIVISÃO DOS NÚMEROS ESCOLHIDOS = ${divisao(4,2)}`)

//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
let numeroEscolhido1 = Number(prompt ("Digite um número"))
let numeroEscolhido2 = Number(prompt ("Digite um número novamente"))
console.log (`RESULTADO SOMA ${soma(numeroEscolhido1, numeroEscolhido2)}`)
console.log (`RESULTADO SUBTRAÇÃO ${subtracao(numeroEscolhido1, numeroEscolhido2)}`)
console.log (`RESULTADO MULTIPLICAÇÃO ${multiplicacao(numeroEscolhido1, numeroEscolhido2)}`)
console.log (divisao(numeroEscolhido1, numeroEscolhido2))
