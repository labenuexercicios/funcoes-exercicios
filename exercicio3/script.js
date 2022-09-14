/*# Exercício 3

Crie 4 funções, cada uma deve receber dois parâmetros numéricos 
e retornar o valor uma das operações básicas (soma, subtração, 
    multiplicação e divisão).

Em seguida, peça para o usuário inserir dois números e chame 
essas 4 funções com esses valores inputados pelo usuário sendo 
o argumento. Por fim, imprima no console o resultado das operações*/

function som(x ,y){
    var soma
    soma = Number(x) + Number(y)
    return soma
}
function sub(x,y){
    var subtra
    subtra = x - y
    return subtra
}
function multi(x,y){
    var multip
    multip = x * y
    return multip
}
function divisao(x,y){
    var divi
    divi = x/y
    return divi
}

x = (prompt("Qual é o valor de x?"))
y = (prompt("qual é o valor de y?"))
Number(x)
Number(y)
console.log(som(x,y),sub(x,y), multi(x,y),divisao(x,y))