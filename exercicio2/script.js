// Parte A

function soma (numero1, numero2){
    somaNumeros = numero1 + numero2
    console.log(`A soma dos números é: ${somaNumeros}`)
}

soma(1, 2)

// Parte B

function maiorIgual (numero1, numero2){
    comparativo = numero1 >= numero2
    console.log(`O número ${numero1} é maior ou igual ao número ${numero2}? ${comparativo}`)
}

maiorIgual(1, 2)

// Parte C

function maiorIgual (numero){
    par = numero % 2 === 0
    console.log(`O número ${numero} é par? ${par}`)
}

maiorIgual(2)

// Parte D

function salarioLiquido (salarioBruto){
    INSS = 0.1
    salario = salarioBruto - (salarioBruto * INSS)
    return `O salário líquido é de ${salario}`
}

const salarioFinal = salarioLiquido(5000)
console.log(salarioFinal)