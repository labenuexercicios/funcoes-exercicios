/* a) Uma função que receba 2 números como parâmetros, 
e, dentro da função, faça 
a soma das duas entradas e imprima o resultado. 
Invoque a função e imprima no console o resultado. 
*/

function numerosRecebidos (numero1, numero2){
    console.log (numero1 + numero2)
    
}

numerosRecebidos(2, 4)

/* b) Uma função que recebe 2 números
 e imprime um booleano que informa se o 
primeiro número é **maior ou igual** ao segundo.*/

function numerosRecebidos2 (num1, num2){
    console.log (num1 >= num2)
}
numerosRecebidos2 (5, 6)
// False, porque 5 é menor do que 6. */

/* c) Uma função que receba um número
 e imprima no console um boleano informando
se o número é par ou não. */

function numeroRecebido3 (numero3){
    console.log (numero3 % 2 === 0)
}
numeroRecebido3 (4)
// true, porque 4 é par */

/* d) Uma função que receba 
um valor de salário e retorne 
o valor com o desconto 10% 
referente ao INSS.*/

function valorSalario (salario){
    const INSS = 0.1
    return salario * (1-INSS) 
}
console.log (valorSalario (2000))



