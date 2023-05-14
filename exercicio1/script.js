// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele.
// Chame esta função várias vezes com números diferentes.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função,
//ou __arrow functions__ 


// const digitarNome =(nome) => {
//     console.log(`Olá,${nome} `)
// }
// digitarNome('Douglas')

const criarTabuada = (numero) => { 
const num1 = 1 * numero 
const num2 = 2 * numero
const num3 = 3 * numero 
const num4 = 4 * numero
const num5 = 5 * numero
const num6 = 6 * numero
const num7 = 8 * numero
const num8 = 8 * numero
const num9 = 9 * numero
const num10 = 10 * numero
console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10)
return num1, num2, num3, num4, num5, num6, num7, num8, num9, num10
}
console.log(criarTabuada(1))