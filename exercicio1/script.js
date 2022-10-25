//Nome
const meuNome = (nome) => {
  console.log(`Olá ${nome}.`);
};
meuNome('Tiago');

//Tabuada
const tabuada = (n) => {
  for (let i = 1; i <= 10; i++) console.log(n + 'x' + i + ' = ' + n * i);
};
tabuada(5);
