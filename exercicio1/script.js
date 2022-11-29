// a)
// function ola(msg) {
//     console.log("Olá, " + msg + "!");
// }

// b)
// function tabuada(numero) {
//     for (let i = 1; i <=10; i++) {
//         console.log(numero * i)
//     }   
// }

// function tabuada com parametro numero + for/ laço e let/variavel (let i = 1; i <=10; i++) chamo o console.log executando(numero* i)

// c) function expression / expressão de função
const ola = function(msg) {
    console.log("Olá, " + msg + "!")
}
ola('Débora')

// c) arrow function / "função de seta =>"
const tabuada = (numero) => {
    for (let i = 1; i <=10; i++) {
        console.log(numero * i)
    }
    
}
tabuada(9)