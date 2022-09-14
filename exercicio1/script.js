// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function imprimaNome(){
    console.log("Olá Giovanna")
}
imprimaNome()

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
function tabuada6(){
    const tabuada = 6
    for (let i=1; i<=10; i++)
 console.log(`${i} X ${tabuada} = ${i*tabuada}`)
}
tabuada6()

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
// function imprimaNome(){
//     console.log("Olá Giovanna")
// }
// imprimaNome()
const imprimeNome = (nome) => {
    console.log(`Olá ${nome}`)
}
imprimeNome("Giovanna")

