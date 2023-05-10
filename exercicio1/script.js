// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function imprimirNome (nome){
    console.log(`Olá, ${nome}!`);
}
imprimirNome(`Fernanda`)

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

// function imprimirTabuada (numero){
//     console.log(`${numero} * 1 =`, numero * 1);
//     console.log(`${numero} * 2 =`, numero * 2);
//     console.log(`${numero} * 3 =`, numero * 3);
//     console.log(`${numero} * 4 =`, numero * 4);
//     console.log(`${numero} * 5 =`, numero * 5);
//     console.log(`${numero} * 6 =`, numero * 6);
//     console.log(`${numero} * 7 =`, numero * 7);
//     console.log(`${numero} * 8 =`, numero * 8);
//     console.log(`${numero} * 9 =`, numero * 9);
//     console.log(`${numero} * 10 =`, numero * 10);
// }

    // console.log(numero * 1)
    // console.log(numero * 2)
    // console.log(numero * 3)
    // console.log(numero * 4)
    // console.log(numero * 5)
    // console.log(numero * 6)
    // console.log(numero * 7)
    // console.log(numero * 8)
    // console.log(numero * 9)
    // console.log(numero * 10)


// imprimirTabuada(2)


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// EXPRESSÕES DE FUNÇÃO

// const imprimirTabuada = function (numero){
//     console.log(`${numero} * 1 =`, numero * 1);
//     console.log(`${numero} * 2 =`, numero * 2);
//     console.log(`${numero} * 3 =`, numero * 3);
//     console.log(`${numero} * 4 =`, numero * 4);
//     console.log(`${numero} * 5 =`, numero * 5);
//     console.log(`${numero} * 6 =`, numero * 6);
//     console.log(`${numero} * 7 =`, numero * 7);
//     console.log(`${numero} * 8 =`, numero * 8);
//     console.log(`${numero} * 9 =`, numero * 9);
//     console.log(`${numero} * 10 =`, numero * 10);
// }
// imprimirTabuada(2)

// ARROW FUNCTION

const imprimirTabuada = (numero) => {
    console.log(`${numero} * 1 =`, numero * 1);
    console.log(`${numero} * 2 =`, numero * 2);
    console.log(`${numero} * 3 =`, numero * 3);
    console.log(`${numero} * 4 =`, numero * 4);
    console.log(`${numero} * 5 =`, numero * 5);
    console.log(`${numero} * 6 =`, numero * 6);
    console.log(`${numero} * 7 =`, numero * 7);
    console.log(`${numero} * 8 =`, numero * 8);
    console.log(`${numero} * 9 =`, numero * 9);
    console.log(`${numero} * 10 =`, numero * 10);
}
imprimirTabuada(2)