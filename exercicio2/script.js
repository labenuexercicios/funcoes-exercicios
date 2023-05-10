// # Exercício 2 - FIZ USANDO O ARROW FUNCTION

// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

const imprimirResultado = (numero1, numero2) => {
    const soma = numero1 + numero2
    console.log(`A soma entre ${numero1} + ${numero2} = `, soma);
}
imprimirResultado (2,3)
imprimirResultado (5,3)


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const imprimirResultado1 = (numero1, numero2) => {
    const booleano = numero1 >= numero2
    console.log(`O número ${numero1} é maior que o número ${numero2}?`, booleano);
}

imprimirResultado1 (2,3)
imprimirResultado1 (5,3)


// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const imprimirResultado3 = (numero) => {
    const numeroPar = numero % 2 === 0
    console.log(`O número ${numero} é par?`, numeroPar);
}

imprimirResultado3 (2)
imprimirResultado3 (5)


// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const imprimirSalarioLiquido = (salarioBruto) => {
    const salarioLiquido = salarioBruto * 0.9
    console.log (`O salario bruto é R$ ${salarioBruto},00. Com o desconto de 10% do INSS, o salário líquido é de R$`, salarioLiquido,`,00`);
}

imprimirSalarioLiquido (5000)
imprimirSalarioLiquido (10000)