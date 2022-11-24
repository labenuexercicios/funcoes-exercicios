let nome = prompt('ingrese seu nome');
window.nome;

function nomePrint(nome) {
  console.log(nome);
}
nomePrint(nome)

let tabuadaNum = Number(prompt('Ingrese um numero'))
window.tabuadaNum
console.log(` vamoos iniciar a tabuada do ${tabuadaNum}`)

function tabuada(tabuadaNum) {
  for(let i = 0; i <= 10; i++){
    console.log(tabuadaNum * i)
  }
}

tabuada(tabuadaNum)


const printArrow = (nome) => {
  console.log(`meu nome arrow ${nome}`)
}

printArrow(nome)

const tabuadaArrow = (tabuadaNum) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`tabuada en ARROW ${tabuadaNum * i}`)
  }
}

tabuadaArrow(tabuadaNum)
/*
# Exercício 1

a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
*/





