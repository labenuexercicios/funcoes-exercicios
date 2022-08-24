/*a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.

b) Declare uma função que imprima a tabuada do 6. Chame esta função.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions*/


console.log('(A) - Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função')
function imprimir(nome){
    console.log(`Olá, meu nome é ${nome}`)
}

imprimir("Isaias")

console.log('==============================================')

console.log('(B) - Declare uma função que imprima a tabuada do 6. Chame esta função')


function tabuada(){
    for(let i = 0; i<=10; i++){
    console.log(`${6} X ${i} = ${6*i}`);
      
}
}

tabuada()

console.log('==============================================')

console.log('(C) - Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions*')

console.log('Não sei o que comentar, apenas sentir! Não está sendo fácil ....')
console.log('')
console.log('arrow function'.toLocaleUpperCase()) 
console.log('')
const  imp = (nome)=>{
    console.log(`Olá, meu nome é ${nome}`)
}

imp('Isaias')

console.log('=========================')
console.log()

const tab=()=>{
    for(let i = 0; i<=10; i++){
    console.log(`${6} X ${i} = ${6*i}`);
  
    }
}

tab()

