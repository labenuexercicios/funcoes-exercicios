/**
 * Ejercicio 3

a) Crear 4 funciones, cada una debe recibir dos parámetros numéricos y devolver 
el valor de
 una de las operaciones básicas (suma, resta, multiplicación y división).

b) Luego, fuera de las funciones, recibir dos números del usuario y almacenarlos
 en variables.

c) Invocar cada una de las 4 funciones, pasando los dos números recibidos del 
usuario como argumentos.

d) Finalmente, crear variables para recibir el retorno de cada una de las funciones
 e imprimir el resultado de las operaciones en la consola.
 
 */
 let inserirNumero = Number (prompt("insira números aqui"));
 let inserirNumeros = Number(prompt("insira segundo número aqui"));
 
 
 function somaOperacional(inserirNumero, inserirNumeros){
     const adicao = inserirNumero + inserirNumeros
         console.log(adicao)
     }
 
 somaOperacional(inserirNumero,inserirNumeros);
 
 function multiplicacaOperacional(inserirNumero,b){
     const multiplicacao = inserirNumero * inserirNumeros
         console.log(multiplicacao)
     }
 multiplicacaOperacional(inserirNumero, inserirNumeros);
 
 
 function divisaoOperacional(inserirNumero,inserirNumeros){
     const divisao = inserirNumero / inserirNumeros
         console.log(divisao)
     }
 divisaoOperacional(inserirNumero, inserirNumeros);
 
 
 
 function subtracaoOperacional(inserirNumero,inserirNumeros){
     const subtracao = inserirNumero - inserirNumeros
       console.log(subtracao)
     }
 subtracaoOperacional(inserirNumero,inserirNumeros);