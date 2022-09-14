//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function olaUsuario(nomeUsuario) {
//     console.log(`Olá, ${nomeUsuario}`)
// }
// olaUsuario("Aline")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.


// function tabuada(tabuadaDe6) {
//     let seis = 6
//     let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     for( let i in numeros){
//         console.log(seis * numeros[i])
//     }
// }
// console.log(tabuada())

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

//c.1
const nome = (nomeUsuario) => {
    console.log(`Olá, ${nomeUsuario}`)
}
nome("Aline")

//c.2
const tabuada = (tabuadaDe6) => {
    let seis = 6
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i in numeros) {
        console.log(seis * numeros[i])
    }
}
tabuada()

