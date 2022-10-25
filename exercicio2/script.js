// Letra A

function soma(num1, num2) {
    console.log(num1 + num2)
}

soma(6, 3)

// Letra B

function maiorNumero(numero1, numero2) {
    const verifica = numero1 >= numero2
    console.log(`O número ${numero1} é maior que o número ${numero2}? ${verifica}`)
}

maiorNumero(7, 11)

// Letra C

function numeroPar(numero) {
    const verifica = numero % 2 === 0
    console.log(`O número ${numero} é par? ${verifica}`)
}

numeroPar(16)

// Letra D

function analisaTexto(texto) {
    const tamanho = texto.length
    const textoMaiuscolo = texto.toUpperCase()
    console.log(`O texto ${texto}, possui ${tamanho} caracteres e sua versão maiuscula é ${textoMaiuscolo}`)
}

analisaTexto("Um gato comeu o camundongo")