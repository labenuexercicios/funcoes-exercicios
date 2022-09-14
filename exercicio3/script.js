// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).


// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

let n1 = +prompt('Isira o primeiro numero')
let n2 = +prompt('Isira o primeiro numero')

const handleSoma = (num1, num2) => {
    return num1 + num2
}

const handleSubtracao = (num1, num2) => {
    return num1 - num2
}

const handleMutiplica = (num1, num2) => {
    return num1 * num2
}

const handleDivisao = (num1, num2) => {
    return num1 / num2
}

console.log(handleSoma(n1,n2))
console.log(handleSubtracao(n1,n2))
console.log(handleMutiplica(n1,n2))
console.log(handleDivisao(n1,n2))