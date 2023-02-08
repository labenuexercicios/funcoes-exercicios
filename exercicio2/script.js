let somaNumero = (num1, num2) => {
  let resultado = num1 + num2;
  return resultado;
};
console.log(`A soma dos números 2 e 4 é: ${somaNumero(2, 4)}`);

let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite outro número"));

let maiorNumero = () => {
  testaMaior = numero1 >= numero2;
  return testaMaior;
};
console.log(maiorNumero());

let num3 = Number(prompt("Digite um terceiro número"));

let testaPar = () => {
  let reslt = (num3 % 2 === 0) === true;
  return reslt;
};
console.log(`O número ${num3} é par? ${testaPar()}`);

let salario = Number(prompt("Digite o seu salário"));

let descInss = () => {
  let salarioComDesconto = salario * 0.9;
  return salarioComDesconto;
};
console.log(
  `O salário bruto é ${salario.toFixed(
    2
  )}R$ e com desconto do INSS de 10% é ${descInss().toFixed(2)}R$`
);
