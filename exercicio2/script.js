function somarNumero (numero1, numero2){
    const soma = numero1 + numero2
    const frase = `A soma dos números será: ${soma}`
    console.log(frase)
}

somarNumero (3,7)
somarNumero(84,23)

function compararNumero (num1, num2){
    const compara = num1 >= num2 === true
    const fraseCompara = `O primeiro número é maior ou igual ao segundo número? ${compara}`
    console.log (fraseCompara)
}

compararNumero (5,3)
compararNumero(15,30)
compararNumero(21,36)

function paridade (number){
    const ehPar = number %2 ===0
    const fraseParidade = `O número informado é par? ${ehPar}`
    console.log(fraseParidade)
}

paridade(5)
paridade(10)

function calcularSalario(salarioBruto){
    const salarioLiquido = salarioBruto * 0.9
    const salarioFinal = `Seu salário liquído será de ${salarioLiquido}`
    console.log(salarioFinal)
}

calcularSalario(1000)
calcularSalario(3650)

