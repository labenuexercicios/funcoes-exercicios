// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos
// e retornar o valor de uma das operações básicas (soma, subtração,
// multiplicação e divisão).

function parametro1(numero1, numero2) {
    console.log("A soma dos números é:", (numero1 + numero2))
};

function parametro2(numero1, numero2) {
    console.log("A subtração dos números é:", (numero1 - numero2))
};

function parametro3(numero1, numero2) {
    console.log("A multiplicação dos números é:", (numero1 * numero2))
};

function parametro4(numero1, numero2) {
    console.log("A divisão dos números é:", (numero1 / numero2))
};

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

let numeroDoUsuario1 = prompt("Digite um número");
let numeroDoUsuario2 = prompt("Digite outro número");

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

parametro1(numeroDoUsuario1, numeroDoUsuario2);
parametro2(numeroDoUsuario1, numeroDoUsuario2);
parametro3(numeroDoUsuario1, numeroDoUsuario2);
parametro4(numeroDoUsuario1, numeroDoUsuario2);

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções 
// e imprima o resultado das operações no console.

let soma = (numero1 + numero2);
let subtracao = (numero1 - numero2);
let multiplicacao = (numero1 * numero2);
let divisao = (numero1 / numero2);


console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);