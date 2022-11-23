//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
const soma = () => num01+num02
const sub = () => num01-num02
const mult = () => num01*num02
const divis = () => num01/num02

//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
let num01 = +(prompt("Digite um número:"));
let num02 = +(prompt("Digite outro número:"));

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
const soma1 = soma (num01,num02);
const sub1 = sub (num01,num02);
const mult1 = mult (num01,num02);
const divis1 = divis (num01,num02);

console.log(num01+' + '+num02+' = '+soma1)
console.log(num01+' - '+num02+' = '+sub1)
console.log(num01+' x '+num02+' = '+mult1)
console.log(num01+' ÷ '+num02+' = '+divis1.toFixed (2))