/*a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
*/

//Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function saudacao(nome) {
    console.log(`olá ${nome}`);
}
saudacao("clara")

//Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

function tabuada(num) {

    for (let num2 = 1; num2 < 11; num2++) {
        console.log(`${num} x ${num2} = ${num * num2}`)

    }
    console.log("\n")
}

for (let num = 2; num < 10; num++) {
    tabuada(num)

}


// Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const tabuada2 = (num) => {

    for (let num2 = 1; num2 < 11; num2++) {
        console.log(`${num} x ${num2} = ${num * num2}`)

    }
    console.log("\n")
}

for (let num = 2; num < 10; num++) {
    tabuada2(num)

}

