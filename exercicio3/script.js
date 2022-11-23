/* 
a) Crie 4 funções, cada uma deve receber 
dois parâmetros numéricos e 
retornar o valor de uma das operações básicas
 (soma, subtração, multiplicação e divisão). 
 /* b) Em seguida, fora das funções, 
receba do usuário dois números 
e armazene em variáveis. */

 function operacao1 (param1, param2){ 
    return  param1 + param2
    
 }
 const resultado = operacao1(2, 4)
 console.log (resultado) 

 function operacao2 (param1, param2){
return param1 - param2
 }
 const resultadoSub = operacao2(4, 2)
 console.log (resultadoSub)

 function operacao3 (param1, param2){
    return param1 * param2
 }
 const resultadoMult = operacao3(2, 4)
 console.log (resultadoMult)

 function operacao4 (param1, param2){
    return param1 / param2
}
const resultadoDiv = operacao4(4, 2)
console.log (resultadoDiv)
/* b) Em seguida, fora das funções,
 receba do usuário dois números 
 e armazene em variáveis.*/



/* c) Invoque cada uma das 4 funções,
 passando como argumento os dois números
  recebidos do usuário./* 
d) Por fim, crie variáveis para receber 
o retorno de cada uma das funções e imprima
o resultado das operações no console.*/

  const numeroPensado = Number (prompt(`que número você está pensando?`))
  const numeroPensando2 = Number (prompt(`Pense em outro número.`))

  function somaDouser (numeroPensado, numeroPensado2){
    return numeroPensado + numeroPensado2
  }
  const resultadoDouser = somaDouser(numeroPensado, numeroPensando2)
  console.log(resultadoDouser)
  /* o resultado da soma é 10 */

  



  
  







 




