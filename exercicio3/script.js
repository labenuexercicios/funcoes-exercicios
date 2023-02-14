function soma (num1, num2) {
    const op1 = num1 + num2
    return op1
}

function subtracao(num1, num2) {
    const op2 = num1 - num2

    return op2
}

function mult(num1, num2) {
    const op3 = num1 * num2

    return op3
}

function div(num1, num2) {
    const op4 = num1/num2

    return op4
}

const numero1 = Number(prompt("Digite o primeiro número"))
const numero2 = Number(prompt("Digite o segundo número"))

const opSoma = soma(numero1, numero2)
const opSub = subtracao(numero1, numero2)
const opMult = mult(numero1, numero2)
const opDiv = div(numero1, numero2)

console.log(opSoma)
console.log(opSub)
console.log(opMult)
console.log(opDiv)