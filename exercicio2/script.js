/**
 * Declare y llame a las siguientes funciones:

a) Una función que recibe 2 números como parámetros y, dentro de la función, suma 
las dos entradas 
e imprime el resultado. Llame a la función e imprima el resultado en la consola.

b) Una función que recibe 2 números e imprime un booleano que informa si el primer
 número es mayor o
 igual que el segundo.

c) Una función que recibe un número e imprime un booleano en la consola informando 
si el número es
 par o no.

d) Una función que recibe un valor de salario y devuelve el valor con un 10% de 
descuento referente al INSS. 
 */


let a = Number(prompt("insira números aqui"));
let b = Number(prompt("insira segundo número aqui"));
window.a
console.log(a)
window.b
console.log(b)

function numeroSoma(a,b){
let adicao = a + b
    console.log(adicao)
}
numeroSoma(a, b);

function numeroMaiorIgual(a,b){
    let maiorIgual = a >= b
        console.log(maiorIgual)
    }
numeroMaiorIgual(a,b);

function numeroModulo(a){
    const modulo = a % 2 
        console.log(modulo)
    }
numeroModulo(a);

function numeroDesconto(a){
    const desconto = a * 0.9
    console.log(desconto)
    }
numeroDesconto(a);