// let n1
// let n2
// let p1 = ("Usuário, insira um número!")
// let p2 = ("Usuário, insira o segundo número!")

// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas 
// (soma, subtração, multiplicação e divisão).

function soma (n1,n2){
    let calculo = n1+n2
    return(`Operação de soma dos números inseridos: ${n1}+${n2}=${calculo}`)
}
function subtracao (n1,n2){
    let calculo = n1-n2
    return(`Operação de subtração dos números inseridos: ${n1}-${n2}=${calculo}`)
}
function multiplicacao (n1,n2){
    let calculo = n1*n2
    return(`Operação de multiplicação dos números inseridos: ${n1}*${n2}=${calculo}`)
}
function divisao (n1,n2){
    let calculo = n1/n2
    return(`Operação de divisão dos números inseridos: ${n1}/${n2}=${calculo}`)
}


// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
let n1
let n2
let p1 = ("Usuário, insira um número!")
let p2 = ("Usuário, insira o segundo número!")
n1 = Number(prompt(p1))
n2 = Number(prompt(p2))

// Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

console.log (`${soma(n1,n2)}
${subtracao(n1,n2)} 
${multiplicacao(n1,n2)} 
${divisao(n1,n2)}`)