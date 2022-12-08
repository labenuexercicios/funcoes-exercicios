// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function meuNome(nome) {
    console.log(`Olá ${nome}`)
}

meuNome("Ian")
meuNome("Claudio")
meuNome("Valéria")

// b) Declare uma função que receba um número como parâmetro imprima no console
// a tabuada do dele. Chame esta função várias vezes com números diferentes.

function numero(num) {
    console.log("1 x", (num), "=", (num * 1))
    console.log("2 x", (num), "=", (num * 2))
    console.log("3 x", (num), "=", (num * 3))
    console.log("4 x", (num), "=", (num * 4))
    console.log("5 x", (num), "=", (num * 5))
    console.log("6 x", (num), "=", (num * 6))
    console.log("7 x", (num), "=", (num * 7))
    console.log("8 x", (num), "=", (num * 8))
    console.log("9 x", (num), "=", (num * 9))
    console.log("10 x", (num), "=", (num * 10))
}

numero(45)

// c) Comente as funções criadas acima, e reescreva-as utilizando 
// expressões de função, ou __arrow functions__