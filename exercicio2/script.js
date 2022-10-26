const soma = (num1,num2) => {
    console.log (`${num1} + ${num2} = ${num1+num2}`);
}

soma(2,2);

const comparacao = (num1,num2) => {
    console.log (`${num1>num2}`);
}

comparacao(3,2);

const par = (num) => {
    if (num %2 ===0 ){
        console.log ("Par");
    } else {
        console.log ("Ímpar");
    }
}

const frase = (texto) => {
    console.log (texto.length);
    const texto1 = texto.toUpperCase();
    console.log (texto1)
}

// const frase1 = prompt ("Digite uma frase:"); 
frase("Eu te amo!");
