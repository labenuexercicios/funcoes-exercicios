function somarNumero(numero1, numero2) {
  const somar = numero1 + numero2;
  return somar;
}

// console.log(somarNumero(2, 5));

function subtrairNumero(numeroSub1, numeroSub2) {
  const subtrair = numeroSub1 - numeroSub2;
  return subtrair;
}

console.log(subtrairNumero());

// console.log(subtrairNumero(30, 7));

function multiplicarNumero(numeroMult1, numeroMult2) {
  const multiplicar = numeroMult1 * numeroMult2;
  return multiplicar;
}

// console.log(multiplicarNumero(3, 9));

function dividirNumero(numeroDiv1, numeroDiv2) {
  const dividir = numeroDiv1 / numeroDiv2;
  return dividir;
}

// console.log(dividirNumero(10, 2));

const numeroArmazenado1 = Number(prompt("Digite o primeiro número: "));
const numeroArmazenado2 = Number(prompt("Digite o segundo número: "));

const resultadoSoma = somarNumero(numeroArmazenado1, numeroArmazenado2);
console.log(resultadoSoma);

const resultadoSubtrair = subtrairNumero(numeroArmazenado1, numeroArmazenado2);
console.log(resultadoSubtrair);

const resultadoMulstiplicar = multiplicarNumero(
  numeroArmazenado1,
  numeroArmazenado2
);
console.log(resultadoMulstiplicar);

const resultadoDivisao = dividirNumero(numeroArmazenado1, numeroArmazenado2);
console.log(resultadoDivisao);
