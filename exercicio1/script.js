let imprimeNome = (meuNome) => {
  meuNome = "Henrique";
  return meuNome;
};
console.log(`Olá ${imprimeNome()}`);

let num = Number(prompt("Digite um número"));

let tabuadaDeMultiplicacao = () => {
  let resultado;
  for (let i = 1; i <= 10; i++) {
    let multiplicacao = num * i;
    resultado = console.log(`${num} x ${i} = ${multiplicacao}`);
  }
  return resultado;
};
let tabuadaDeDivisao = () => {
  let resultado;
  for (let i = 1; i <= 10; i++) {
    let divisao = num / i;
    resultado = console.log(`${num} / ${i} = ${divisao.toFixed(2)}`);
  }
  return resultado;
};
let tabuadaDeSoma = () => {
  let resultado;
  for (let i = 1; i <= 10; i++) {
    let soma = num + i;
    resultado = console.log(`${num} + ${i} = ${soma}`);
  }
  return resultado;
};
let tabuadaDeSubtracao = () => {
  let resultado;
  for (let i = 1; i <= 10; i++) {
    let subtracao = num - i;
    resultado = console.log(`${num} - ${i} = ${subtracao}`);
  }
  return resultado;
};

console.log(tabuadaDeMultiplicacao());
console.log(tabuadaDeDivisao());
console.log(tabuadaDeSoma());
console.log(tabuadaDeSubtracao());
