//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const soma = (num01, num02) => {
    num01 = +(prompt("Digite um número:"));
    num02 = +(prompt("Digite outro número para ser somado:"));
    console.log("A soma do número",num01,"com o número",num02,"é de:",num01+num02)
}
soma ()

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

console.log(" ")
const boleano = (num03, num04) => {
    num03 = +(prompt("Digite um número?"));
    num04 = +(prompt("Digite outro número"));
    console.log("O número",num03,"é maior q o número",num04+"? ",num03>=num04)
}
boleano ()

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

console.log(" ")
const par = (num05) => {
    num05 = +(prompt("Digite um número:"));
    console.log("O número",num05,"é par?",num05%2 === 0)
}
par ()

//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

console.log(" ")
const salario = (num06) => {
    num06 = +(prompt("Qual o valor do salário? R$"));
    const salInss = num06-(num06*0.10)
    console.log("O seu salário de R$"+num06+", terá um desconto de 10% de INSS, o valor do salário recebido será de: R$"+salInss)
}
salario ()