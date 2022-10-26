// //const nome = prompt ("Qual seu nome?");

// function imprimeNome(seuNome){
//     console.log (`Olá, ${seuNome}`);
// }

// imprimeNome("Jéssica"); // imprimeNome(nome)

// //const num = prompt ("Digite um número: ")
// // var limite = prompt ("Qual limite da tabuada")

// function tabuada(numero){
//     for (var i=1; i<=10 ; i++){ //no lugar do 10 colocaria a variável limite
//         console.log ( `${numero} x ${i} = ${numero * i}`);
//     }
// }

// tabuada(6); //Poderia ser qualquer outro número

// // EXPRESSÃO DE FUNÇÃO
// console.log ("\n\n EXPRESSÃO DE FUNÇÃO \n\n");

// //const nome1 = prompt ("Qual seu nome?");
// const nome1 = "Jéssica"; 

// const imprimeNome1 = function (seuNome1) {
//     console.log (`Olá, ${seuNome1}!`);
// }

// imprimeNome1("Jéssica");

// const tabuada1 = function (numero){
//     for (var i = 1 ; i <= 10 ; i++){
//         console.log (`${numero} x ${i} = ${numero*i}`);
//     }
// }

// tabuada1(6);

// // ARROW FUNCTIONS
// console.log ("\n\n ARROW FUNCTIONS\n\n");

// const imprimeNome2 = (seuNome) => {
//     console.log (`Olá, ${seuNome}!`);
// }

// imprimeNome2("Jéssica");

// const tabuada3 = (numero) => {
//     for (var i =1; i<=10; i++){
//         console.log (`${numero} x ${i} = ${numero*i}`);
//     }
// }

// tabuada3(6);

let statusCarro = "desligado";
let aceleracao = 0;

function ligarDesligar(status) {
    if (statusCarro === "desligado") {
        statusCarro = "ligado"
    }

    else {
        statusCarro = "desligado"
    }
    return statusCarro;
}

function acelerar(incremento) {
    aceleracao += incremento
    return "Acelerando a " + aceleracao + "m/s"
}

function frear(decremento) {
    aceleracao = aceleracao - decremento
    return "Desacelerando para " + aceleracao + "m/s"
}