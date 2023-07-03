function olaMundo(){
    console.log("Olá Isaias");
}

olaMundo();



function tabuada(num) {
  let resultado = '';
  for (let a = 1; a <= 10; a++) {
    resultado += `${num} x ${a} = ${num * a}\n`;
  }
  return resultado;
}

console.log(tabuada(10));

//tabuada