    // // # Exercício 2
    // // Declare e invoque as funções abaixo:

    // // a) Uma função que recebe 2 números como parâmetros e que 
    // imprime a soma deles. 
    // Invoque a função e verifique o resultado no console.

    // // b) Uma função que recebe 2 números e imprime um booleano que 
    // informa se o primeiro número é **maior ou igual** ao segundo.

    // // c) Uma função que recebe um número e imprime no console um 
    // booleano informando se o número é par ou não.

    // // d) Uma função que recebe um salário bruto e 
    // retorna o salário líquido com desconto de 10%, referente ao INSS.

function somaDeDois(a, b){

    const somaDeDois = a + b
    return somaDeDois;
}

const somandoEles = somaDeDois(8, 5) 

console.log (somandoEles)

function maiorDeles(a, b) {
    const maiorDeles = a > b
    return maiorDeles;

}

const maiorDeles2 = maiorDeles(2,3)

console.log(maiorDeles2)

function parOuNao(a) {
    const parOuNao = a % 2 === 0
    return parOuNao;
}

const seraPar2 = parOuNao(20)

console.log(seraPar2)

function salarioBruto(a) {
    const salarioLiquido =  a- (a * (10 / 100))
    return salarioLiquido
}

const salarioLiquido = salarioBruto(200)

console.log (salarioLiquido)





