let n1 = Number(prompt('Ingrese primeiro numero'));
window.n1;
console.log(n1);
let n2 = Number(prompt('ingrese SEGUNDO numero'));
window.n2;
console.log(n2)
let salario = Number(prompt('ingrese SEU SALARIO e te calculo o INSS'));
window.salario;
console.log(salario)

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const soma = (n1, n2) => console.log(n1 + n2);
soma(n1, n2)


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const maiorIgual = (n1, n2) => {
    let mI = n1 >= n2;
    console.log( `primeiro numero é maior ou igual ao segundo = ${mI}`)
}

maiorIgual(n1, n2)


// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
const nPar = (n1) => {
    if (n1 % 2 == 0) {
        console.log( `${n1} e um numero PAR`)
    } else {
       console.log( `{$n1} e um numero IMPAR!`)
    }
}

nPar(n1)



// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

const comINSS = (salario) => {
    console.log(salario * 0.9)
}
comINSS(salario)