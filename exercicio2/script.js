// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e 
// imprima no console o resultado.

let n1Prompt = "insira um numero"
let n2Prompt = "insira outro numero"

// n1 = Numero (prompt(n1Prompt))
// n2 = Numero (prompt(n2Prompt))

function receba2 (n1,n2){
    console.log(`${n1}+${n2} = ${n1+n2}`) 
}

receba2 (Number (n1 = prompt(n1Prompt)), Number (n2 = prompt(n2Prompt)))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

let i1Prompt = "insira o primeiro número"
let i2Prompt = "insira o segundo número"

function maiorIgual2 (i1,i2){
    let calculo = i1 >= i2
    console.log(`O primeiro número digitado (${i1}) é maior ou igual que o segundo(${i2})? ${calculo}`)
}

maiorIgual2 (Number (i1 = prompt(i1Prompt)), Number (i2 = prompt(i2Prompt)))

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

let bPrompt ="insira um número para saber se ele é par"

function parImpar (b){
    let bPar = (b/2) === 0
    console.log(`O número ${b}, é par? ${bPar}`) 

}

parImpar (Number(b = prompt(bPrompt)))

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  
let salarioPrompt = "insira o valor do seu salário bruto"

function salarioDes(salario){
    let calculoInss = salario*0.9
    console.log(`O valor do seu salário com o desconto de 10% do inss é de R$${calculoInss}`)
}

salarioDes (Number (salario = prompt (salarioPrompt)))
