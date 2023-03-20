// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
let name1 = "Martín"
// function printName(){
// console.log(`Olá, ${name1}!`);
// }

// printName();

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

let number = Number(prompt("Digite um numero:"));

// function printNumbers(number) {
//     for (let index = 1; index <= 10; index++) {
//         const result = number * index;
//         console.log(`${number} x ${index} = ${result} `);
//     }
// }
// console.log(`Tabuada do ${number}`);
// printNumbers(number);

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const printName = (name) => {
    console.log(`Olá, ${name1}!`);
};

printName(name1);

const printNumbers = (number) => {
    for (let index = 1; index <= 10; index++) {
        const result = number * index;
        console.log(`${number} x ${index} = ${result} `);
    };
};

console.log(`Tabuada do ${number}`);
printNumbers(number);