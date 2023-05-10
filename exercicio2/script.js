//exercício 2
//Declare e invoque as funções abaixo:
//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

let receberNumero = (numero1, numero2) => {
    const soma = numero1 + numero2
    console.log(`A soma do número ${numero1} mais o número ${numero2} é`, soma)
}
receberNumero(5, 5)
receberNumero(2, 8)
receberNumero(20, 20)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
const receberNumeroBooleano = (numero3, numero4) => {
    const imprimeBooleano = numero3 >= numero4
    console.log(`O número ${numero3} é maior ou igual ao ${numero4},`, imprimeBooleano)
}

receberNumeroBooleano(10, 5)
receberNumeroBooleano(20, 40)
receberNumeroBooleano(5, 5)
receberNumeroBooleano(100, 150)

//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
const receberNumeroPar = (numero5) => {
    const numeroPar = numero5 % 2 === 0
    console.log(`O número ${numero5} é um número par?:`, numeroPar)
}

receberNumeroPar(25)
receberNumeroPar(18)
receberNumeroPar(33)
receberNumeroPar(12)

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
const receberSalario = (valor) => {
    let liquido = valor - valor * 0.1
    return `O valor líquido é: ${liquido}`
}
        console.log (receberSalario (7000.00))
        console.log (receberSalario (2200.00))

