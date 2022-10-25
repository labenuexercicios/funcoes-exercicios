<<<<<<< HEAD
function nome(nome) {
    return `(Função nomeada) Olá ${nome}`
}
console.log("Prática guiada 1")
console.log("\nFunção nomeada")

console.log(nome("Wesllie Brito"))
console.log(nome("Antonia Brandão"))
console.log(nome("Pâmela Sayane"))

console.log("\nFunção não-nomeda")

const nomes = (nome) => {
    return `(Função não-nomeda) Olá ${nome}`
}

console.log(nomes("Rosicreide"))
console.log(nomes("Marlucineia"))
console.log(nomes("Valdolino"))

console.log("\nPrática guiada 2")
console.log("\nFunção nomeada")

function recebeNumero(numero) {
    const testaPar = numero % 2 === 0
    const somaDez = numero + 10
    const multiplica = numero * numero

    return `(Função nomeada) O número ${numero} é par? ${testaPar}. Somando com 10 o resultado é ${somaDez} e multiplicado por ele mesmo é ${multiplica}.`
}

console.log(recebeNumero(7))

console.log("\nExpressão de função")

const recebeNumeros = (numero) => {
    const testaPar = numero % 2 === 0
    const somaDez = numero + 10
    const multiplica = numero * numero

    return `(Expressão de função) O número ${numero} é par? ${testaPar}. Somando com 10 o resultado é ${somaDez} e multiplicado por ele mesmo é ${multiplica}.`
}

console.log(recebeNumeros(14))
    //
=======

// Letra A
function olaNome(nome){
    console.log("Olá", nome)
}

olaNome("Wesllei")

// Letra B

function tabuada(valor){
    console.log("1 x", valor, "=", 1 * valor)
    console.log("2 x", valor, "=", 2 * valor)
    console.log("3 x", valor, "=", 3 * valor)
    console.log("4 x", valor, "=", 4 * valor)
    console.log("5 x", valor, "=", 5 * valor)
    console.log("6 x", valor, "=", 6 * valor)
    console.log("7 x", valor, "=", 7 * valor)
    console.log("8 x", valor, "=", 8 * valor)
    console.log("9 x", valor, "=", 9 * valor)
    console.log("10 x", valor, "=", 10 * valor)
}

tabuada(6)

console.log("")
console.log("Arrow function")

// Letra C parte 1
const olaNomeArrowfunction = (nome) => {
    console.log("Olá", nome)
}

olaNomeArrowfunction("Wesllei Brito")

// Letra C parte 2

const tabuadaArrowFunction = (valor) => {
    console.log("1 x", valor, "=", 1 * valor)
    console.log("2 x", valor, "=", 2 * valor)
    console.log("3 x", valor, "=", 3 * valor)
    console.log("4 x", valor, "=", 4 * valor)
    console.log("5 x", valor, "=", 5 * valor)
    console.log("6 x", valor, "=", 6 * valor)
    console.log("7 x", valor, "=", 7 * valor)
    console.log("8 x", valor, "=", 8 * valor)
    console.log("9 x", valor, "=", 9 * valor)
    console.log("10 x", valor, "=", 10 * valor)
}

tabuada(6)
>>>>>>> 5b9c0b8e68fb04c08089ebd154514238d2d6affe
