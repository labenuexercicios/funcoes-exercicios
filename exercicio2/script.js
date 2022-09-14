//Declare e chame as funções abaixo:

//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function operacao(num1, num2) {
    const soma = num1 + num2
    console.log("Letra a:", soma)
}
operacao(3, 8)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function operacao2(num1, num2) {
    if (num1 >= num2) {
        console.log("Letra b:", true)
    }
}
operacao2(6, 3)

//c) Uma função que receba um número e imprima se ele é par ou não

function operacao3(num1) {
    if (num1 % 2 === 0) {
        console.log(`Letra c: O número ${num1} é par.`)
    } else {
        console.log(`Letra c: O número ${num1} não é par.`)
    }
}
operacao3(6)

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem() {
    const mensagemRecebida = prompt("Digite uma mensagem positiva")
    console.log(`Letra d: A mensagem " ${mensagemRecebida.toUpperCase()} " tem ${mensagemRecebida.length} letras.`)
}
mensagem()
