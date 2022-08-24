/*Crie 4 funções, cada uma deve receber dois parâmetros numéricos e 
retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário
 sendo o argumento. 
Por fim, imprima no console o resultado das operações*/


console.log('Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).')
console.log("")
function soma(n1,n2){
    const total = n1 + n2
    return (total)
}


function subtracao(n1,n2){
    const total1 = n1 - n2
    return (total1)
}

function multiplicacao(n1,n2){
    const total2 = n1 * n2
    return (total2)
}

function divisao(n1,n2){
    const total3 = n1 / n2
    return (total3)
}

console.log(`Vai dar`, soma(10,3))
console.log(`Vai dar`, subtracao(30,17))
console.log(`Vai dar`, multiplicacao(6.5,2))
console.log(`Vai dar`, divisao(26,2))

console.log('=====================================================================')

console.log('Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuáriosendo o argumento. Por fim, imprima no console o resultado das operações')
console.log('')
function teste(){
    const num1 = Number(prompt('digite um número'))
    const num2 = Number(prompt('Digite outro número'))
     const resultado1 = num1 + num2 
     const resultado2 = num1 * num2
     const resultado3 = num1 / num2
     const resultado4 = num1 - num2
     console.log(`O resultado é: Soma ${resultado1} Multiplicação ${resultado2} Divisão ${resultado3}  Subtração ${resultado4}`)
}

console.log(teste())

