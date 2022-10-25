/* function seuNome(nome) {
    return `Olá ${nome}`
}
seuNome("Regiane")

function tabuada(numero){
    console.log(numero * 1, numero * 2, numero * 3, numero * 4, numero * 5, numero * 6, numero * 7, numero * 8, numero * 9, numero * 10)
}
tabuada(2)
tabuada(5)
tabuada(9) */


// arrow funciton

const seuNome = (nome) => {
    return `Olá ${nome}`
}
seuNome("Miguel")


const tabuada = (numero) => {
    console.log(`${numero} X 1 = ${numero *1}`)
    console.log(`${numero} X 2 = ${numero *2}`)
    console.log(`${numero} X 3 = ${numero *3}`)
    console.log(`${numero} X 4 = ${numero *4}`)
    console.log(`${numero} X 5 = ${numero *5}`)
    console.log(`${numero} X 6 = ${numero *6}`)
    console.log(`${numero} X 7 = ${numero *7}`)
    console.log(`${numero} X 8 = ${numero *8}`)
    console.log(`${numero} X 9 = ${numero *9}`)
    console.log(`${numero} X 10 = ${numero *10}`)
}

tabuada(2)
tabuada(5)
tabuada(9)
