/*# Exercício 2
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas 
e imprima o resultado. Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual**
 ao segundo.

c) Uma função que receba um número e imprima se ele é par ou não

d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela contendo apenas letras maiúsculas.*/


//a

function calculaDoisNum (n1, n2){
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}

calculaDoisNum(Number(prompt("Informe o primeiro numero")), + (prompt("Informe o segundo numero.")))

//b

function maiorOuNao (num1, num2) {
    let conta = num1 >- num2
    console.log(`O ${num1} é maior ou igual ao ${num2}? ${conta}`);
}

maiorOuNao (4, 2)

//c

function parOuNao (num1){
    let par1 = num1 %2 === 0;
    let naopar = num1%2 !== 0;
    console.log(`O ${num1} é par? assim sendo: ${par1}, senão será ${naopar}.`)
}

parOuNao(7)

//d

function mensagem (string){
    string = `Esta será uma mensagem com todas as letras maiusculas.`
    console.log(`versao 1:`, string, `tamanho da mensagem em caracteres:`, string.length, `Esta será uma menssagem com todas as letras maiusculas.`, )
}

mensagem()

