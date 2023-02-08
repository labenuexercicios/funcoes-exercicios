//A)
function somaNumeros(n1, n2) {
    const soma = n1 + n2
    return soma
}

function  subtraiNumeros(n1, n2) {
    const subtracao = n1 - n2
    return subtracao

}

function multiplicaNumero(n1, n2) {
    const multiplica = n1 * n2
    return multiplica
}

function divideNumeros(n1, n2) {
    const divide = n1 / n2 
    return divide
}

// B)
const numeroUsuario1 = Number(prompt('informe o primeiro numero'))
const numeroUsuario2 = Number(prompt('informe o segundo numero'))

//C) e  D)
const chamadaSoma = somaNumeros(numeroUsuario1, numeroUsuario2)
const chamadaSub = subtraiNumeros(numeroUsuario1, numeroUsuario2)
const chamadaMult = multiplicaNumero(numeroUsuario1, numeroUsuario2)
const chamadaDivi = divideNumeros(numeroUsuario1, numeroUsuario2)

console.log(`os numeros obtidos foram ${numeroUsuario1} e ${numeroUsuario2}`)
console.log(`o resultado da soma é: ${chamadaSoma}. 
o resultado da subtração é: ${chamadaSub}.
o resultado da multiplicação é: ${chamadaMult}.
o resultado da divisão é: ${chamadaDivi}.`)










