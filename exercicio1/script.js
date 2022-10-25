function boasVindas (nome){
    console.log(`Olá, ${nome}!`)
}
boasVindas ("Gabriel")

/*function tabuada (numero){
    const zero = numero + 0
    const um = numero + 1
    const dois = numero + 2
    const tres = numero + 3
    const quatro = numero + 4
    const cinco = numero + 5
    const seis = numero + 6
    const sete = numero + 7
    const oito = numero + 8
    const nove = numero + 9
    console.log(zero, um, dois, tres, quatro, cinco, seis, sete, oito, nove)
    
}
tabuada(1)
tabuada(2)
tabuada(3)
tabuada(4)
tabuada(5)*/
let tabuadaDois =(numero) => {
    const zero = numero + 0
    const um = numero + 1
    const dois = numero + 2
    const tres = numero + 3
    const quatro = numero + 4
    const cinco = numero + 5
    const seis = numero + 6
    const sete = numero + 7
    const oito = numero + 8
    const nove = numero + 9
    console.log(`${numero} + 0 =`, zero,)
    console.log(`${numero} + 1 =`, um,)
    console.log(`${numero} + 2 =`, dois,)
    console.log(`${numero} + 3 =`, tres,)
    console.log(`${numero} + 4 =`, quatro,)
    console.log(`${numero} + 5 =` ,cinco,)
    console.log(`${numero} + 6 =` ,seis,)
    console.log(`${numero} + 7 =`, sete,)
    console.log(`${numero} + 8 =`, oito,)
    console.log(`${numero} + 9 =`, nove)
}
tabuadaDois(3)
tabuadaDois(4)