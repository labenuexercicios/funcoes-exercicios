function somando(numSom1, numSom2){
    console.log("Soma dos dois numeros:", (numSom1 + numSom2))
}

function subtraindo(numSub1, numSub2){
    console.log("Resultado do primeiro numero menos o segundo numero:", (numSub1 - numSub2))
}

function multiplicando(numMul1, numMul2){
    console.log("Multiplicação dos dois numeros:", (numMul1 * numMul2))
}

function dividindo(numDiv1, numDiv2){
    console.log("Resultado divisão do primeiro pelo segundo numero:", (numDiv1 / numDiv2))
}

const numberOne =Number (prompt ("Escreve aqui um numero de 0 a 100"))
const numberTwo =Number (prompt ("Escreve aqui outro numero de 0 a 100"))

somando(numberOne, numberTwo)
subtraindo(numberOne, numberTwo)
multiplicando(numberOne, numberTwo)
dividindo(numberOne, numberTwo)

// acima retornos estão armazenados nas funções
console.log(".")
// abaixo os retornos estão armazenados nas variaveis 

const a =(numberOne +numberTwo)
const b =(numberOne - numberTwo)
const c =(numberOne * numberTwo)
const d =(numberOne / numberTwo)
console.log("Soma dos dois numeros:", a)
console.log("Resultado do primeiro numero menos o segundo numero:", b)
console.log("Multiplicação dos dois numeros:", c)
console.log("Resultado divisão do primeiro pelo segundo numero:", d)

