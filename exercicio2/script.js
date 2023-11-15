function somaDoisNumeros(num1, num2) {
    console.log(`A soma de ${num1} mais ${num2} é igual a`, num1 + num2);
}

somaDoisNumeros(32, 47);

const comparaDoisNumeros = (num1, num2) => {
    const comparacao = num1 >= num2;
    console.log("O primeiro número é maior ou igual ao segundo?", comparacao);
}

comparaDoisNumeros(7, 25);

const paridade = (numero) => {
    const paridade = (numero % 2) === 0;
    console.log(`O número ${numero} é par?`, paridade);
}

paridade(50);

const salarioLiquido = function (salarioBruto) {
    const salarioLiquido = salarioBruto - (salarioBruto * 0.1);
    console.log("O salário líquido de R$", salarioBruto, "é R$", salarioLiquido, ".");
}

salarioLiquido(20000);