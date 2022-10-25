let numA = Number(prompt("Digite o primeiro valor:"))
let numB = Number(prompt("Digite o segundo valor:"))


function soma(numA,numB){
    return numA + numB
}

function subtrai(numA,numB){
    return numA - numB
}

function multiplica(numA,numB){
    return numA * numB
}

function divide(numA,numB){
    return numA / numB
}

//let numA = prompt("Digite o primeiro valor:")
//let numB = prompt("Digite o segundo valor:")
const resultadoSoma = soma()
const resultadoSubtrai = subtrai()
const resultadoMultiplica = multiplica()
const resultadoDivide = divide()

console.log(soma(numA,numB))
console.log(subtrai(numA,numB))
console.log(multiplica(numA, numB))
console.log(divide(numA,numB))