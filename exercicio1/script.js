// function digaOla(){
//     let nome = prompt("Qual seu nome?")
//     console.log(`Olá, ${nome}`)
// }

// digaOla()


// function tabuada(){
//     const num = 6
//     for(let i = 0; i <= 10; i++){
//         let multiplicacao = 6*i
//                 console.log(`A multiplicação de ${num} * ${i} resulta em: ${multiplicacao}`)
//             }
// }

// tabuada()


const digaOla = (nome) => {
    let nome1 = prompt("Qual seu nome?")
    console.log(`Olá ${nome1}`)

}

digaOla()


const tabuada = (numeros) => {
    const num = 6
    for(let i = 0; i <= 10; i++){
        const multiplicacao = 6*i
        console.log(multiplicacao)
    }
}

tabuada()