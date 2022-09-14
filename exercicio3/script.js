const soma = (num1, num2) => {
    const somaDosNumeros = num1+num2;
    console.log(somaDosNumeros);
}
const subtrai = (num1, num2) => {
    const subtracaoDosNumeros = num1 - num2;
    console.log(subtracaoDosNumeros);
}
const multiplicacao = (num1, num2) => {
    const multiplicacaoDosNumeros = num1 * num2;
    console.log(multiplicacaoDosNumeros);
}
const divisao = (num1, num2) => {
    const divisaoDosNumeros = num1 / num2;
    console.log(divisaoDosNumeros);
}

let numero1= +prompt("Insira um numero");
let numero2= +prompt("Insira outro numero");
soma(numero1,numero2);
subtrai(numero1, numero2);
multiplicacao(numero1, numero2);
divisao(numero1,numero2);