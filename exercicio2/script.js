//Declare e chame as funções abaixo:
//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
/* function numerosDeParametros (num1, num2) {
    const soma =  num1 + num2;
    console.log(soma)
}
numerosDeParametros(29, 71) */


//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
/* function numerosDeParametros (num1, num2) {
    if (num1 >= num2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
numerosDeParametros(2, 10)
 */

//c) Uma função que receba um número e imprima se ele é par ou não
/* function numero (num1) {
    if (num1 % 2 === 0) {
        console.log("Par")
    } else if (num1 % 2 !== 0) {
        console.log("Não é par")
    }
}
numero(3) */

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagemString (mensagem) {
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}
mensagemString("deu boa")