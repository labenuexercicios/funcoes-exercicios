function somar(n1, n2) {
   let result = n1 + n2
   return result
}

function sub(n1, n2) {
    let result2 = n1 - n2
    return result2
 }

function mult(n1, n2) {
   let result3 = n1 * n2
   return result3
}

function divisao(n1, n2) {
    let result4 = n1 / n2
    return result4
 }

const n1 = +prompt("Digite um número: ")
const n2 = +prompt("Digite um número: ")

console.log(`A somar é ${somar(n1, n2)}\n A subtração é ${sub(n1, n2)}\n A multiplicação é ${mult(n1, n2)}\n A divisão é ${divisao(n1, n2)}`)