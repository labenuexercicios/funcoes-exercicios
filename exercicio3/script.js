// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar 
// o valor uma das operações básicas (soma, subtração, multiplicação e divisão).


// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções 
// com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, imprima no console o resultado das operações

//soma
function soma (num1, num2)
{
    console.log("o resultado da soma de " + num1 + " + " + num2 + " é " + (num1 + num2))
}

//subtração
function sub (num1, num2)
{
    console.log("o resultado da subtração de " + num1 + " - " + num2 + " é " + (num1 - num2))
}

//multiplicação
function mult (num1, num2)
{
    console.log("o resultado da multiplicação de " + num1 + " x " + num2 + " é " + (num1 * num2))
}

//divisão
function div (num1, num2)
{
    console.log("o resultado da divisão de " + num1 + " / " + num2 + " é " + (num1 / num2))
}

nUser1 = +prompt("digite o número 1")
nUser2 = +prompt("digite o número 2")
soma(nUser1, nUser2)
sub(nUser1, nUser2)
mult(nUser1, nUser2)
div(nUser1, nUser2)
