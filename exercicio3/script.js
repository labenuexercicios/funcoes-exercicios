// function soma(n1,n2){
//     return n1+n2;
// }

// console.log(soma(5,6));//imprime 11

// function subtracao(n1,n2){
//     return n1-n2;
// }

// console.log(subtracao(5,6));//imprime 11

// function multipicacao(n1,n2){
//     return n1*n2;
// }

// console.log(multipicacao(5,6));//imprime 11

// function divisao(n1,n2){
//     return n1/n2;
// }

// console.log(divisao(5,6));//imprime 11


let n1 = Number(prompt("Informe o primeiro número"));
let n2 = Number(prompt("Informe o segundo número"));

console.log(n1,n2);

function soma(){
    return n1+n2;
}

console.log("A soma é:",soma(5,6));

function subtracao(){
    return n1-n2;
}

console.log("A subtração é:",subtracao());

function multipicacao(){
    return n1*n2;
}

console.log("A multiplicação é:",multipicacao(5,6));

function divisao(){
    return n1/n2;
}

console.log("A divisão é:",divisao(5,6));