/*# Exercício 1

a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que imprima a tabuada do 6. Chame esta função.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, 
ou __arrow functions__ */

function imprimeNome(nome){
    console.log(`Olá, ${nome}!`)
}

imprimeNome("Bruna")

//b

function imprimeTabuada() {
    const num = 6
    let i = 1
    for(i; i<=10; i++ ){
        console.log(` ${i} x ${num} = ${i*num}`)}
}
    imprimeTabuada()

