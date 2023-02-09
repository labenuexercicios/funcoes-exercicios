// Exercício 2
// a)

function somarNumero(numero1, numero2) {
  const soma = numero1 + numero2;
  return soma;
}
console.log(somarNumero(2, 6));

// b)

function maioOuIgual(numeroA, numeroB) {
  const verificar = numeroA >= numeroB;
  return verificar;
}
console.log(maioOuIgual(6, 4));

// c)

function numeroPar(numero) {
  const verificarNumeroPar = numero % 2 === 0;
  return verificarNumeroPar;
}
console.log("número", numeroPar(4));

// d)

function salarioReal(salario) {
  const desconto = salario * 0.1;
  const salarioLiquido = salario - desconto;

  return salarioLiquido;
}

console.log(salarioReal(3000));
