/*Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

c) Uma função que receba um número e imprima se ele é par ou não

d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas 
letras maiúsculas.*/

console.log('a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. \n Invoque a função e imprima no console o resultado.'.toUpperCase())
console.log('')
function numero(a,b){
    const soma = a+b
        console.log('A soma dos números é:', soma)
}

numero(11356,10559)

console.log('=========================================================')
console.log('')
console.log('b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.'.toUpperCase())
console.log('')

//preciso corrigir esse código para imprimir tbm quando for igual

function imprimaMaiorIgual(n1,d){
    if(n1 >= d){
        console.log(`O primeiro número informado é maior que o segundo`)
    }else{
        console.log('o segundo número informado é maior que o primeiro')
    }
}

imprimaMaiorIgual(2,5)
console.log('')
console.log('========================================================')
console.log('')

console.log('c) Uma função que receba um número e imprima se ele é par ou não'.toUpperCase())
console.log('')

function imprimaPar(num){
    if(num %2 === 0){
        console.log(`O número ${num} é par`)
    }else{
        console.log(`O número ${num} é impar`)
    }
    }
    imprimaPar(5)
    console.log('======================================================')
    console.log('')
    console.log('d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente\n com uma versão dela contendo apenas letras maiúsculas'.toUpperCase())
    console.log('')
    function string(mensagem){
        console.log(`A mensagem possui ${mensagem.length} letras`)
        console.log(`${mensagem.toUpperCase()}`)
    }
    string("força companheiro!")
console.log('=========================================================')
console.log('')
console.log('FIM')