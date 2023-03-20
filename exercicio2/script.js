// # Exercício 2
// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
console.log("A)")
function soma(x,y){
    let adicao = x + y
    return(`A soma de x e y é: ${adicao}`)
}
let numeroX = Number( prompt("Escolha um número x"))
let numeroY = Number( prompt("Escolha um número y"))
let resultado = soma(numeroX, numeroY)
console.log(resultado)
// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
console.log("B)")
function maiorIgual (x1, x2){
    let maior = x1 >= x2
    return(`x1 é maior ou igual à x2? ${maior}`)
}

let numeroX1 = prompt("Escolha um valor para X1")
let numeroX2 = prompt("Escolha um valor para X2")
let resposta = maiorIgual(numeroX1,numeroX2)
console.log(resposta)
// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
console.log("C)")
function par(n1){
    let testePar = n1 % 2 
    return(`O número escolhido é par? ${testePar===0}`)
}
let nX = prompt("Escolha um número")
let resposta2 = par(nX)
console.log(resposta2)
// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
console.log("D)")
function salarioLiquido (salário){
    let salBruto = salário
    let salLiquido = salBruto - salBruto*0.1
    return(`O saláiro bruto é ${salBruto} e o salário líquido é ${salLiquido}. `)
}
let sal = prompt("Qual o seu salário bruto?")
let resposta3 = salarioLiquido(sal)
console.log(resposta3)


