//Execício 1
// a)

function meuNome(nome) {
  const frase = `Olá ${nome}`;
  console.log(frase);
}

function calcularNumero(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(resultado);
}

meuNome("soma", 2, 2);
///////////////////////////////////////////////////////////////////

const meuNome1 = (nomes) => {
  const frases = `Olá ${nomes}`;
  console.log(frases);
};

meuNome1("Anderson");

//////////////////////////////////////////////////////////////////
// b)

function tabuada(numero) {
  const tabuada = numero;
  console.log(`${tabuada} vezes 1 é ${tabuada * 1}`);
  console.log(`${tabuada} vezes 2 é ${tabuada * 2}`);
  console.log(`${tabuada} vezes 3 é ${tabuada * 3}`);
  console.log(`${tabuada} vezes 4 é ${tabuada * 4}`);
  console.log(`${tabuada} vezes 5 é ${tabuada * 5}`);
  console.log(`${tabuada} vezes 6 é ${tabuada * 6}`);
  console.log(`${tabuada} vezes 7 é ${tabuada * 7}`);
  console.log(`${tabuada} vezes 8 é ${tabuada * 8}`);
  console.log(`${tabuada} vezes 9 é ${tabuada * 9}`);
  console.log(`${tabuada} vezes 10 é ${tabuada * 10}`);
}

tabuada(6);

////////////////////////////////////////////////////

const tabuadas = (numeros) => {
  const tabuadas = numeros;
  console.log(`${tabuadas} vezes 1 é ${tabuadas * 1}`);
  console.log(`${tabuadas} vezes 2 é ${tabuadas * 2}`);
  console.log(`${tabuadas} vezes 3 é ${tabuadas * 3}`);
  console.log(`${tabuadas} vezes 4 é ${tabuadas * 4}`);
  console.log(`${tabuadas} vezes 5 é ${tabuadas * 5}`);
  console.log(`${tabuadas} vezes 6 é ${tabuadas * 6}`);
  console.log(`${tabuadas} vezes 7 é ${tabuadas * 7}`);
  console.log(`${tabuadas} vezes 8 é ${tabuadas * 8}`);
  console.log(`${tabuadas} vezes 9 é ${tabuadas * 9}`);
  console.log(`${tabuadas} vezes 10 é ${tabuadas * 10}`);
};

tabuadas(3);
