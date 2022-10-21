//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
/* function imprimirNome (nome) {
    console.log(`Olá, ${nome}!`)
}
imprimirNome("João") */


//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

let numero = 6
function imprimirTabuada (tabuada) {
    for (let i = 1; i <= 10; i++) {
        console.log(i*numero)
    }
}
console.log(imprimirTabuada(numero))
//console.log(`${numero} X ${i} = ${i*numero}`)

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 