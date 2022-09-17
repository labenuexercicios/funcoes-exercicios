// Crie 4 funções, cada uma deve receber dois parâmetros 
//numéricos e retornar o valor uma das operações 
// básicas (soma, subtração, multiplicação e divisão).

// ===== Ao digitar o numero faremos as seguintes operaçãoes, NA ORDEM;
// ===== SOMA, SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO

let gerandoNumero = Number(prompt("Digite um numero para as operações"))
let gerandoOperacao =  Number(prompt("Novamente digite para as operações"))

// == FUNÇÃO SOMA 

function soma(i,j){
    soma = i + j 
}
soma(gerandoNumero, gerandoOperacao)
console.log(soma)

// == FUNÇÃO SUBTRAÇÃO

function subtracao(i,j){
    subtracao = i - j 
}
subtracao(gerandoNumero, gerandoOperacao)
console.log(`${gerandoNumero} - ${gerandoNumero} = ${subtracao}`)

//=== FUNÇÃO DIVISÃO

function divisao(i,j){
    divisao = i / j 
}
divisao(gerandoNumero, gerandoOperacao)
console.log(`${gerandoNumero} / ${gerandoOperacao} = ${divisao}`)

// == FUNÇÃO MULTIPICAÇÃO

function multiplicacao(i,j){
    multiplicacao = i * j 
}
multiplicacao(gerandoNumero, gerandoOperacao)
console.log(`${gerandoNumero} * ${gerandoOperacao} = ${multiplicacao}`)