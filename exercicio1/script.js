// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele.
// Chame esta função várias vezes com números diferentes.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, 
// ou __arrow functions__ 

// const imprimirNome = (nome)=>{
//     console.log(`Olá, ${nome}`)
//     return nome;

// };
// imprimirNome('Douglas')

const criarTabuada = (numero)=>{
    for(i= 1; i <= 10; i++){
console.log(`A tabuada de ${numero} * ${i} é: ${numero*i}`)
    }
    return numero
};
criarTabuada(10)