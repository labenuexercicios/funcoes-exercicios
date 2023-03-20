// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
console.log("A)")
function nome (seunome){
    return(`Olá, ${seunome}`)
}
const nome1 = prompt("Qual o seu nome?")
const resposta = nome(nome1)
console.log(resposta)
// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
console.log("B)")
function tabuada (numero){
    return(`A tabuada de ${numero} é: 
    ${numero}
    ${numero*2}
    ${numero*3}
    ${numero*4}
    ${numero*5}
    ${numero*6}
    ${numero*7}
    ${numero*8}
    ${numero*9}
    ${numero*10}`)

}
let numeroEscolhido = prompt("Escolha um número")
let resposta2 = tabuada(numeroEscolhido)
console.log(resposta2)
// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
console.log("C)")
let tabuada2 = (numero) => {
    return(`A tabuada de ${numero} é: 
    ${numero}
    ${numero*2}
    ${numero*3}
    ${numero*4}
    ${numero*5}
    ${numero*6}
    ${numero*7}
    ${numero*8}
    ${numero*9}
    ${numero*10}`)
}
let numeroEscolhidoX = prompt("Escolha um número")
let resposta3 = tabuada2(numeroEscolhidoX)
console.log(resposta3)




