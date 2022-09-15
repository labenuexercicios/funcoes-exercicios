// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar 
// o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4
//  funções com esses valores inputados pelo usuário sendo o argumento.
//   Por fim, imprima no console o resultado das operações
function somaNumeros (primeiroNumeroInserido,segundoNumeroInserido){
    return  primeiroNumeroInserido + segundoNumeroInserido;
    
}

function subtraiaNumeros (primeiroNumeroInserido,segundoNumeroInserido){
    return  primeiroNumeroInserido - segundoNumeroInserido;
    
}

function dividiNumeros (primeiroNumeroInserido,segundoNumeroInserido){
    return  primeiroNumeroInserido / segundoNumeroInserido;
}

function multiplicaNumeros (primeiroNumeroInserido,segundoNumeroInserido){
    return primeiroNumeroInserido * segundoNumeroInserido;
    
}


primeiroNumeroInserido = Number(prompt("Digite um numero para operação"))
segundoNumeroInserido = Number(prompt("Digite outro numero para completar a operação"))

let soma = somaNumeros(primeiroNumeroInserido,segundoNumeroInserido);
let subtrai = subtraiaNumeros(primeiroNumeroInserido,segundoNumeroInserido);
let dividi = dividiNumeros(primeiroNumeroInserido,segundoNumeroInserido);
let multiplica = multiplicaNumeros(primeiroNumeroInserido,segundoNumeroInserido);

console.log(
 ` ${primeiroNumeroInserido} + ${segundoNumeroInserido} = ${soma}
 ${primeiroNumeroInserido} - ${segundoNumeroInserido} = ${subtrai}
 ${primeiroNumeroInserido} / ${segundoNumeroInserido} = ${dividi}
 ${primeiroNumeroInserido} x ${segundoNumeroInserido} = ${multiplica}`)
