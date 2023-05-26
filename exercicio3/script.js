//a

function somaNum(a, b){
    const soma = a + b
    console.log(`${a} + ${b} = ${soma}.`)
}

somaNum(10, 2)

function subNum(a, b){
    const sub = a - b
    console.log(`${a} - ${b} = ${sub}.`)
}

subNum(10, 2)

function multNum(a, b){
    const mult = a * b
    console.log(`${a} x ${b} = ${mult}.`)
}

multNum(10, 2)

function divNum(a, b){
    const div = a / b
    console.log(`${a} / ${b} = ${div}.`)
}

divNum(10, 2)

//b

const num1 = Number(prompt('Digite o primeiro número'))
const num2 = Number(prompt('Digite o segundo número'))

//c

somaNum(num1, num2)
subNum(num1, num2)
multNum(num1, num2)
divNum(num1, num2)

//d

