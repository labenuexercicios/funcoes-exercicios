// Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const numero = (num1, num2) => {
    return num1 + num2
}
const resposta = numero(3, 5)
console.log(resposta)

// Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo

const maiorNumero = (numero1, numero2) => {
    const verificaMaior = numero1 >= numero2
    return `O segundo primeiro numero ${numero1} é maior que o segundo ${numero2}? ${verificaMaior}`
}

console.log(maiorNumero(2, 7))

// Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const paridade = (numero) => {
    const par = numero % 2 === 0
    return `O numero ${numero} é par? ${par}`
}
console.log(paridade(7))

// Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. 

const salario = (valorSalario) => {
    const descontoInss = valorSalario * 0.10
    const salarioBruto  = valorSalario - descontoInss
    return `O valor do salario com desconto de 10% de Inss é ${salarioBruto}`
}
const resultado = salario(2500.00)
console.log(resultado)



