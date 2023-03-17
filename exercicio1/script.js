const imprimirNome = (nome) => {
    console.log(`Olá, ${nome}`)
}

//imprimirNome('Vinicius')

const tabuada = (numero) => {
    console.log(`------------ Tabuada do: ${numero} ----------`)
    console.log(`------- ${numero} x 1 = ${numero*1} ---------`)
    console.log(`------- ${numero} x 2 = ${numero*2} ---------`)
    console.log(`------- ${numero} x 3 = ${numero*3} ---------`)
    console.log(`------- ${numero} x 4 = ${numero*4} ---------`)
    console.log(`------- ${numero} x 5 = ${numero*5} ---------`)
    console.log(`------- ${numero} x 6 = ${numero*6} ---------`)
    console.log(`------- ${numero} x 7 = ${numero*7} ---------`)
    console.log(`------- ${numero} x 8 = ${numero*8} ---------`)
    console.log(`------- ${numero} x 9 = ${numero*9} ---------`)
    console.log(`------- ${numero} x 10 = ${numero*10} --------`)
    console.log(`----------------------------------------------`)
    
}

const tabuadaFor = (numero) => {
    console.log(`------------ Tabuada do: ${numero} ----------`)
    for (let i = 0; i <=10; i ++) {
        console.log(`------- ${numero} x 1 = ${numero*i} ---------`)
    }
    console.log(`----------------------------------------------`)
}

// tabuada(2)
// tabuada(3)
// tabuada(4)
// tabuada(5)

tabuadaFor(2)