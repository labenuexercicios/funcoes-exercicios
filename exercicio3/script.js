// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações 
// básicas (soma, subtração, multiplicação e divisão).

// function soma(n1,n2){
//     console.log(`${n1} + ${n2} = ${n1+n2}`)
// }

// function substracao(n1,n2){
//     console.log(`${n1} - ${n2} = ${n1-n2}`)
// }
// function multiplicacao(n1,n2){
//     console.log(`${n1} x ${n2} = ${n1*n2}`)
// }
// function divisao(n1,n2){
//     console.log(`${n1} / ${n2} = ${n1/n2}`)
// }

// soma(4,2)
// substracao(2,2)
// multiplicacao(3,2)
// divisao(8,2)

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo 
// usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const num1 = Number(prompt("Digite o primeiro numero"))
const num2 = Number(prompt("Digite o segundo numero"))

function soma(n1,n2){
    console.log(`${n1} + ${n2} = ${n1+n2}`)
}

function substracao(n1,n2){
    console.log(`${n1} - ${n2} = ${n1-n2}`)
}
function multiplicacao(n1,n2){
    console.log(`${n1} x ${n2} = ${n1*n2}`)
}
function divisao(n1,n2){
    console.log(`${n1} / ${n2} = ${n1/n2}`)
}

soma(num1,num2)
substracao(num1,num2)
multiplicacao(num1,num2)
divisao(num1,num2)