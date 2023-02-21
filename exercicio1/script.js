//EXERCICIO 1 - A

function nome (seuNome){

    const frase = (`Olá, ${seuNome}`)
    console.log(frase)

}

nome('Eduardo')
nome('Vitor')
nome('Aure')
nome('Legoas')
nome('Urso')
nome('Thanos')

//EXERCICIO 1 - B

function tabuada (numero) {

    const frase = `A tabuada de ${numero} é:`
    console.log(frase, numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10)

}

tabuada(1)
tabuada(2)
tabuada(3)
tabuada(4)
tabuada(5)
tabuada(6)
tabuada(7)
tabuada(8)
tabuada(9)
tabuada(10)

//EXERCICIO 1 - C (ARROW)

const calcularTabuada = (numero) => {

    const frase = `A tabuada de ${numero} é:`
    console.log(frase, numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10)

}

tabuada(1)
tabuada(2)
tabuada(3)
tabuada(4)
tabuada(5)
tabuada(6)
tabuada(7)
tabuada(8)
tabuada(9)
tabuada(10)





/* //PARTE 1
function seuNome (nome){
    const frase = `Olá ${nome}`
    console.log(frase)
}

seuNome('Eduardo')


//PARTE 2

function tabuada (numero){
    const frase = `A tabuada de ${numero} é:`
    console.log(frase, numero*1, numero*2, numero*3, numero*4,
        numero*5, numero*6, numero*7, numero*8, numero*9,
        numero*10)
}

tabuada(1)
tabuada(2)
tabuada(3)
tabuada(4)
tabuada(5)
tabuada(6)
tabuada(7)
tabuada(8)
tabuada(9)
tabuada(10)

// PARTE 3


const seuNomeArrow=(nome) =>{
    const frase = `Olá ${nome}`
    console.log(frase)
}

seuNome('Eduardo')




const tabuadaArrow = (numero) =>{
    const frase = `A tabuada de ${numero} é:`
    console.log(frase, numero*1, numero*2, numero*3, numero*4,
        numero*5, numero*6, numero*7, numero*8, numero*9,
        numero*10)
    }
tabuada(1)
tabuada(2)
tabuada(3)
tabuada(4)
tabuada(5)
tabuada(6)
tabuada(7)
tabuada(8)
tabuada(9)
tabuada(10) */