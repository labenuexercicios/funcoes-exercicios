const soma = (num1,num2) => {
    console.log (`${num1} + ${num2} = ${num1+num2}`);
}

const subtracao = (num1,num2) => {
    console.log (`${num1} - ${num2} = ${num1-num2}`);
}

const multiplicacao = (num1,num2) => {
    console.log (`${num1} x ${num2} = ${num1*num2}`);
}

const divisao = (num1,num2) => {
    console.log (`${num1} / ${num2} = ${num1/num2}`);
}

const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

soma(numero1,numero2);
subtracao(numero1,numero2);
multiplicacao(numero1,numero2);
divisao(numero1,numero2);


//OUTRO EXEMPLO UTILIZANDO O RETURN

const soma1 = (num1,num2) => {
    var soma1 = num1+num2;
    return soma1;
}

console.log (soma1(3,3));