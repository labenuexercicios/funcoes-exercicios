function Soma(n1, n2) {
    return n1 + n2
}

function Subtração(n1, n2) {
    return n1 - n2
}

function Multiplicação(n1, n2) {
    return n1 * n2
}

function Divisão(n1, n2) {
    return n1 / n2
}

let n1 = Number(prompt("Escreva um número."))

while (isNaN(n1)) {
    n1 = Number(prompt("Escreva um NÚMERO."))
}

let n2 = Number(prompt("Escreva um número."))

while (isNaN(n2)) {
    n2 = Number(prompt("Escreva um NÚMERO."))
}

console.log("Soma: ", Soma(n1,n2))
console.log("Subtração: ", Subtração(n1,n2))
console.log("Multiplicação: ", Multiplicação(n1,n2))
console.log("Divisão: ", Divisão(n1,n2))