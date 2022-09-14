// # Exercício 1



// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function imprimirNome(nome){
//     nome = "Daniel"
//     console.log(`Olá ${nome}`)
// }
// imprimirNome()

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada6 (n1){
//     let i = 0
//     while(i <10){
//         console.log(`${n1}*${i+1} = ${n1*(i+1)}`)
//         i++
//     }
// }
// tabuada6(6)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const imprimirNome = (nome) => {
    nome = "Daniel"
    console.log(`Olá ${nome}`)
}
imprimirNome()

const tabuada6 = (n1) => {
    let i = 0
    while(i < 10){
        console.log(`${n1}*${i+1} = ${n1*(i+1)}`)
        i++ 
    }
}
tabuada6(6)

