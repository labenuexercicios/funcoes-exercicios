

let nome
let qual = "Qual é seu nome?"

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function nomeImpressao(nome){
    //console.log ('Olá,', nome+'!')
    console.log (`Olá, ${nome}!`)        
}

let go = nomeImpressao (nome = prompt(qual))



// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

let numero
let input = "digite um numero"

function tabuada(numero){
    console.log(` 
    tabuada de ${numero}
    ${numero}*1 = ${numero*1}  
    ${numero}*2 = ${numero*2} 
    ${numero}*3 = ${numero*3} 
    ${numero}*4 = ${numero*4} 
    ${numero}*5 = ${numero*5} 
    ${numero}*6 = ${numero*6} 
    ${numero}*7 = ${numero*7} 
    ${numero}*8 = ${numero*8} 
    ${numero}*9 = ${numero*9} 
    ${numero}*10 = ${numero*10} `)
} let calculo = tabuada (numero = prompt(input))

//Em arrow fuction:


let nome1
let qual1 = "Qual é seu nome?"

const NomeImpressaoArrow = (nome1) => {
    //console.log ('Olá,', nome+'!')
    console.log (`Olá, ${nome1}!`)        
}

let goarrow = NomeImpressaoArrow (nome1 = prompt(qual1))


let numero1
let input1 = "digite um numero"

const tabuadArrow = (numero1) => {
    console.log(` 
    tabuada de ${numero1}
    ${numero1}*1 = ${numero*1}  
    ${numero1}*2 = ${numero*2} 
    ${numero1}*3 = ${numero*3} 
    ${numero1}*4 = ${numero*4} 
    ${numero1}*5 = ${numero*5} 
    ${numero1}*6 = ${numero*6} 
    ${numero1}*7 = ${numero*7} 
    ${numero1}*8 = ${numero*8} 
    ${numero1}*9 = ${numero*9} 
    ${numero1}*10 = ${numero*10} `)
} 

let calculoArrow = tabuadArrow (numero1 = prompt(input1))