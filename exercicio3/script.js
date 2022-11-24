// const numberButtons = document.querySelectorAll('[data-numbers]')
// const operationButtons = document.querySelectorAll('[data-operation]')



/*
a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

*/


const a = 2;
const b = 4;

console.log(a)
console.log(b)
let soma = (a, b) => {
    console.log(a + b)
}
soma(a, b)



let subtrair = (a, b)=> {
    console.log(a - b)
}
subtrair(a, b)


let multiplicar = (a, b)=> {
    console.log(a * b)
}
multiplicar(a, b)

let dividir = (a, b)=> {
    console.log(a / b)
}
dividir(a, b)



soma(a, b)
subtrair(a, b)
multiplicar(a, b)
dividir(a, b)

let c = Number(prompt('indique primeiro numero '))
window.c
console.log(c)
let s = Number(prompt('indique segundo numero '))
window.s
console.log(s)
let op1 =soma(c, s);
let op2 = subtrair(c, s);
let op3 = multiplicar(c, s);
let op4 =dividir(c, s);



