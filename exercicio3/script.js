//A
//Crie 4 funções, cada uma deve receber dois parâmetros numéricos 
//e retornar o valor de uma das operações básicas 
//(soma, subtração, multiplicação e divisão).
const soma = (num1, num2) => {
    const resultado = num1 + num2;
    return `${num1} + ${num2} = ${resultado}`;
}

const subtracao = (num1, num2) => {
    const resultado = num1 - num2;
    return `${num1} - ${num2} = ${resultado}`;
}

const multiplicacao = (num1, num2) => {
    const resultado = num1 * num2;
    return `${num1} x ${num2} = ${resultado}`;
}

const divisao = (num1, num2) => {
    const resultado = num1 / num2;
    return `${num1} / ${num2} = ${resultado}`;
}


//B
//Em seguida, fora das funções, 
//receba do usuário dois números e armazene em variáveis.
console.log("Entrada do usuário:")
const num1 = 10;
console.log("Primeiro número: " + num1);
const num2 = 8;
console.log("Segundo número: " + num2);
console.log("");

//C
//Invoque cada uma das 4 funções, passando como argumento 
//os dois números recebidos do usuário.
console.log("Resultado da letra 'c':")
console.log(soma(num1, num2));
console.log(subtracao(num1, num2));
console.log(multiplicacao(num1, num2));
console.log(divisao(num1, num2));
console.log("")


//D
//Por fim, crie variáveis para receber o retorno de cada uma 
//das funções e imprima o resultado das operações no console.
console.log("Resultado da letra 'd':")
const soma2 = soma(num1, num2);
console.log(soma2);

const subtracao2 = soma(num1, num2);
console.log(soma2);

const multiplicacao2 = soma(num1, num2);
console.log(soma2);

const divisao2 = soma(num1, num2);
console.log(soma2);



