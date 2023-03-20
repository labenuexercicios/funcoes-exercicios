// Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
console.log(1)

function somaNumeros(numero1, numero2){
    console.log(numero1 + numero2)
}

somaNumeros(2,3)

// Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

function maiorMenor(numero3, numero4){
    console.log(numero3 >= numero4)  // true para primeiro numero maior do que o primeiro e false para primeiro número menor do que o primeiro
}

maiorMenor(2, 5)

// Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function parOuImpar(numeroTal){
    console.log(numeroTal % 2 === 0) // true para par e false para ímpar
}

parOuImpar(10)
// oi
// Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salarioComDesconto(salario){
    console.log(salario * 90/100)
}

salarioComDesconto(1000)
