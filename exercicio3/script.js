// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
function imprima(param1,param2){
    const soma = param1 + param2
    console.log("Soma",soma)
}
imprima(54, 3)

function imprima1(param1,param2){
    const soma = param1 - param2
    console.log("Subtração",soma)
}
imprima1(54, 3)

function imprima2(param1,param2){
    const soma = param1 / param2
    console.log("Divisão",soma)
}
imprima2(54, 3)

function imprima3(param1,param2){
    const soma = param1 * param2
    console.log("Multiplicação",soma)
}
imprima3(54, 3)



// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
pergunta1 = +prompt("Digite um número qualquer")
pergunta2 = +prompt("Digite outro número")
function imprima0(param3,param4){
    console.log("Soma:",param3+param4 + " Subtração: ",param3-param4 + " Multiplicação: ",param3*param4 + " Divisão: ",param3/param4)
}
imprima0(pergunta1,pergunta2)
