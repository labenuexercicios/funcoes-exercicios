/* a) Declare uma função que imprima
 `Olá, [SEU NOME]!`. Chame esta função. */

 function digaOmeunome (nome) {
    console.log(`Seu nome é:` + nome)
 }
 digaOmeunome(`Thamiris`)

/* b) Declare uma função que
 receba um número como parâmetro.
/* imprima no console a tabuada do dele.
Chame esta função várias vezes
com números diferentes.*/

 function numeroRecebido (numero) {
console.log(numero * 1,
    numero * 2,
    numero * 3,
    numero * 4,
    numero * 5,
    numero * 6,
    numero * 7,
    numero * 8,
    numero * 9,
    numero * 10)
 }
numeroRecebido (2)
numeroRecebido(9)
/* c) Comente as funções criadas acima, 
e reescreva-as utilizando expressões de função,
 ou __arrow functions__ */

 const numeroRecebido2 = (numero) => {
    console.log(numero * 1,
        numero * 2,
        numero * 3,
        numero * 4,
        numero * 5,
        numero * 6,
        numero * 7,
        numero * 8,
        numero * 9,
        numero * 10)
 }
numeroRecebido2 (2)
