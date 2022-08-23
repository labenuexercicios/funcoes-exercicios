// A)
function doisNumeros( n1, n2) {
    const somaDosNumeros =  n1 + n2
    console.log(somaDosNumeros);
}
doisNumeros(3, 15)

// B)
function maiorQue(num1, num2) {
if (num1>=num2) {
  console.log('O primeiro numero é maior que o segundo');
} else {
  console.log('O primeiro numero é menor que o segundo');
}
  return maiorQue
}
maiorQue(2, 06)

// C)
function ePar(num1){
  if (num1%2===0){
  console.log('O numero e par');
  }else{
  console.log('O numero e impar')
  }
  return ePar
}
 ePar(30)

//  D)
function letras(strings) {
  return (`${strings.length} ${strings.toUpperCase()}`)
}

console.log(letras('Flamengo'));