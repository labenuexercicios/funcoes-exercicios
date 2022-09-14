// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e imprima o resultado. 
// Invoque a função e imprima no console o resultado.

function soma (num1, num2)
{
    console.log("o resultado da soma de " + num1 + " + " + num2 + " é " + (num1 + num2))
}
nUser1 = +prompt("digite o número 1")
nUser2 = +prompt("digite o número 2")
soma(nUser1, nUser2)

// b) Uma função que recebe 2 números e imprime um booleano que informa 
// se o primeiro número é **maior ou igual** ao segundo.

function bool (num1, num2)
{
    if(num1 >= num2)
    {
    console.log("o número " + num1 + " é maior ou igual a " + num2)
    }
    else
    {
    console.log("o número " + num1 + " não é maior ou igual a " + num2)
    }
}
nUser_1 = +prompt("digite o número 1")
nUser_2 = +prompt("digite o número 2")
bool(nUser_1, nUser_2)

// c) Uma função que receba um número e imprima se ele é par ou não

function par(num)
{
    if(num % 2 === 0)
    {
        console.log("o número " + num + " é par")
    }
    else
    {
        console.log("o número " + num + " é ímpar")
    }
}
par(prompt("digite um número"))

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o 
// tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function tamanhoMaiusculas(string)
{
    console.log("o tamanho da string é: " + string.length + ", em letras maiúsculas: " + string.toUpperCase())
}
tamanhoMaiusculas(prompt("digite uma palavra"))