// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function imprima(param1,param2){
    const soma = param1 + param2
    console.log(soma)
}
imprima(21, 2)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function imprimeB(num1,num2){

    console.log(`O número ${num1} é maior ou igual ao número ${num2} = ${num1>=num2}`)
}
imprimeB(46,68)


// c) Uma função que receba um número e imprima se ele é par ou não
function imprimeC (numero){
if(numero % 2 === 0){
    console.log(`O número ${numero} é um número par!`)
}else{
    console.log("Não é par!")}

}
imprimeC(prompt(Number))



// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function imprimeD (nomes){
    console.log("O tamanho da mensagem é:" + nomes.length + nomes.toUpperCase())

}
imprimeD("AmmalB")