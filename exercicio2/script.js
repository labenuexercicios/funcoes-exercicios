// //a) Uma função que receba 2 números como parâmetros, 
// //e, dentro da função, faça a soma das duas entradas 
// //e imprima o resultado. Invoque a função e imprima no console o resultado.
// function soma(num1, num2){
//     const resultadoSoma = num1+num2
//     console.log (resultadoSoma)
// }
// (soma(2,3))
// //b) Uma função que recebe 2 números
// // e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function verificaOperacao(num1,num2){
//     if(num1>=num2){
//         console.log (`O primeiro número é maior ou igual ao segundo? ${num1>=num2}`)
//     }else{
//         console.log (`O primeiro número é maior ou igual ao segundo? ${num1>=num2}`)
//     }
// }
// verificaOperacao(5,1)
// verificaOperacao(1,9)

//c) Uma função que receba um número e imprima se ele é par ou não
function verificaParidade(numero){
    if(numero%2 === 0){
        console.log ("O número digitado é par")
    }else{
        console.log ("O número digitado é ímpar")
    }
}

verificaParidade (prompt("Digite um número"))

// //d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
// function mensagem(){
//     const nome = (prompt("Digite seu nome e sobrenome"))
//     const tamanhoNome = nome.length
//     const capsNome = nome.toLocaleUpperCase()
//     console.log (`Tamanho do texto digitado: ${tamanhoNome} \nTexto todo em maiúsculo: ${capsNome}`)
// }
// mensagem ()