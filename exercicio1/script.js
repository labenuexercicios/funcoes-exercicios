function darOla (nome) {
    const frase = `Olá, ${nome}`
    console.log(frase)
} 

darOla('Fernanda')

function calcularTabuada (numero) {
    const tab1 = numero * 1
    const tab2 = numero * 2
    const tab3 = numero * 3
    const tab4 = numero * 4
    const tab5 = numero * 5
    const tab6 = numero * 6
    const tab7 = numero * 7
    const tab8 = numero * 8
    const tab9 = numero * 9
    const tab10 = numero * 10

    const fraseTabuada = 
   `O resultado do número multiplicado por 1 é: ${tab1}
    O resultado do número multiplicado por 2 é: ${tab2}
    O resultado do número multiplicado por 3 é: ${tab3}
    O resultado do número multiplicado por 4 é: ${tab4}
    O resultado do número multiplicado por 5 é: ${tab5}
    O resultado do número multiplicado por 6 é: ${tab6}
    O resultado do número multiplicado por 7 é: ${tab7}
    O resultado do número multiplicado por 8 é: ${tab8}
    O resultado do número multiplicado por 9 é: ${tab9}
    O resultado do número multiplicado por 10 é: ${tab10}
    `
    return fraseTabuada
}

console.log (calcularTabuada(23))
console.log (calcularTabuada (51))

// arrow functions 

const calcularTabuadaArrow = (numero) => {
    const tabuada1 = numero * 1
    const tabuada2 = numero * 2
    const tabuada3 = numero * 3
    const tabuada4 = numero * 4
    const tabuada5 = numero * 5
    const tabuada6 = numero * 6
    const tabuada7 = numero * 7
    const tabuada8 = numero * 8
    const tabuada9 = numero * 9
    const tabuada10 = numero * 10

    const fraseTabuadaArrow = 
    `O resultado do número multiplicado por 1 é: ${tabuada1}
    O resultado do número multiplicado por 2 é: ${tabuada2}
    O resultado do número multiplicado por 3 é: ${tabuada3}
    O resultado do número multiplicado por 4 é: ${tabuada4}
    O resultado do número multiplicado por 5 é: ${tabuada5}
    O resultado do número multiplicado por 6 é: ${tabuada6}
    O resultado do número multiplicado por 7 é: ${tabuada7}
    O resultado do número multiplicado por 8 é: ${tabuada8}
    O resultado do número multiplicado por 9 é: ${tabuada9}
    O resultado do número multiplicado por 10 é: ${tabuada10}`
    return fraseTabuadaArrow

}

console.log(calcularTabuadaArrow (3))
