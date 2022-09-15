// LETRA A:

// function meuNome(nome) {
//     console.log(`Olá, ${nome}`)
// }
// meuNome(prompt("Qual o seu nome? "));

const meuNome = (nome) => {
    console.log(`Olá, ${nome}`)
}
meuNome("Karoline.")

// LETRA B:

// function tabuada(numero){
//     let i = 1
//     while(i <= 10){
//         console.log(numero*i);
//         i++;
//      }
//      return tabuada
// }

// tabuada(6)

const tabuada = (numero) => {
    let i = 1
    while (i <= 10) {
        console.log(numero * i);
        i++;
    }
    return tabuada
}

tabuada(6)



