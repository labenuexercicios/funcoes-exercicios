//EXERCICIO1

//A
const nome = (nome) => {
    return `Olá, ${nome}`;
}

console.log(nome("Paulo Contieri!"));


//B
//usando for
const tabuada = (numero) =>{
    for(var contador = 1; contador <= 10; contador++){
        resultado = numero * contador;
        console.log(numero + " x " + contador + " = " + resultado);
    }
}

tabuada(10);

//B
//sem usar for

const tabuadaSemFor = (numero) =>{
    console.log(`A tabuada escolhida foi do número ${numero}`)
    console.log(`${numero} x 1 = ${1 * numero}`);
    console.log(`${numero} x 2 = ${1 * numero}`);
    console.log(`${numero} x 3 = ${1 * numero}`);
    console.log(`${numero} x 4 = ${1 * numero}`);
    console.log(`${numero} x 5 = ${1 * numero}`);
    console.log(`${numero} x 6 = ${1 * numero}`);
    console.log(`${numero} x 7 = ${1 * numero}`);
    console.log(`${numero} x 8 = ${1 * numero}`);
    console.log(`${numero} x 9 = ${1 * numero}`);
    console.log(`${numero} x 10 = ${1 * numero}`);
}

tabuadaSemFor(5);

//C
//Criei ambas usando a Arrow Function!

