//Calculadora

const n1 = prompt('Insira um número:');
const n2 = prompt('Insira outro número:');

const soma = (a, b) => {
  const res = a + b;
  console.log(res);
};
soma(n1, n2);

const subtracao = (a, b) => {
  const res = a - b;
  console.log(res);
};
subtracao(n1, n2);

const multiplicacao = (a, b) => {
  const res = a * b;
  console.log(res);
};
multiplicacao(n1, n2);

const divisao = (a, b) => {
  const res = a / b;
  console.log(res);
};
divisao(n1, n2);
