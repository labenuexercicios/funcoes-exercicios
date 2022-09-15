//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.



// function olaSeuNome (nome){
//     console.log(`Olá,${nome}`)
// }

// olaSeuNome("Rafaella Estecio")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuadaImprimir (guardaNumero){
    
//     for (let i=1; i<10;i++){
//             let tabuada = guardaNumero * i
//             console.log(`${i} * ${guardaNumero} = ${tabuada}`)
//     }
// }
// tabuadaImprimir(6);

//com arrow functions

const olaSeuNome = (nome) => {
    console.log(`Olá,${nome}`)
}
olaSeuNome("Rafaella Estecio")

const tabuadaImprimir = (guardaNumero) => {
    for (let i=1; i<10;i++){
        let tabuada = guardaNumero * i
        console.log(`${i} * ${guardaNumero} = ${tabuada}`)
}
}
tabuadaImprimir(6);

