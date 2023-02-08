let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"));

let somaNumero = () => {
  let resultado = num1 + num2;
  return resultado;
};
let subtraiNumero = () => {
  let resultado = num1 - num2;
  return resultado;
};
let multiplicaNumero = () => {
  let resultado = num1 * num2;
  return resultado;
};
let divideNumero = () => {
  let resultado = num1 / num2;
  return resultado;
};

console.log(`A soma dos números ${num1} + ${num2} é = ${somaNumero()}`);
console.log(`A subtração dos números ${num1} - ${num2} é = ${subtraiNumero()}`);
console.log(
  `A multiplicação dos números ${num1} x ${num2} é = ${multiplicaNumero()}`
);
console.log(`A divisão dos números ${num1} / ${num2} é = ${divideNumero()}`);
