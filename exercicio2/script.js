// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e,
// dentro da função, faça a soma das duas entradas e imprima 
// o resultado. Invoque a função e imprima no console o resultado.
function somaNumeros (param1,param2){
    
            console.log(param1 +  param2)
}
somaNumeros(2,2);


// b) Uma função que recebe 2 números e imprime um booleano que
//  informa se o primeiro número é **maior ou igual** ao segundo.

function imprimaBolean (param1,param2){

        console.log(`É ${param1 >= param2}`)
    
}
imprimaBolean(7,6)


// c) Uma função que receba um número e imprima se ele é par ou não
function parOuimpar (numeroInserido){
    let resultado = numeroInserido % 2
    if( resultado === 0){
        console.log("é par")
    } else {
        console.log("Não é par")
    }
}
parOuimpar(2);
// d) Uma função que recebe uma mensagem (`string`) como parâmetro 
// e imprima o tamanho dessa mensagem, juntamente com uma versão dela 
// contendo apenas letras maiúsculas.

function recebeMensagem (mensagemInserida) {
    console.log (`O tamanho da mensagem "${mensagemInserida.toUpperCase()}" é: ${mensagemInserida.length} `)

}
let respostaUsuario =  prompt("Escreva sua mensagem")
recebeMensagem (respostaUsuario);