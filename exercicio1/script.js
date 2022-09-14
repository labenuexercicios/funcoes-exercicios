//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function imprimirNome(nome){
//     console.log (`Olá ${nome}`)
// }

// imprimirNome("Victória")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// function calcular(tabuada){
//     for(i=1; i<=10; i++){
//     console.log (tabuada*i)
//     }
// }
// calcular(6)
//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
const imprimirNome = function(nome){
    console.log (`Olá ${nome}`)
}
imprimirNome("Victória")
const calcular = function(tabuada){
    for(i=1; i<=10; i++){
    console.log (tabuada*i)
    }
}
        calcular(6)