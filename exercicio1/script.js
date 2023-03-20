// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
let name1 = "Martín"
// 

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

// let number = Number(prompt("Digite um numero:"));

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

let number = Number(prompt("Digite um numero:"));

const printNumbers = (number) => {
   for (let index = 1; index <= 10; index++) {
        const result = number * index;
        console.log(`${number} x ${index} = ${result} `);
    };
};

printNumbers(number);

// tabuada sem for
// function tabuada (number) {
//     console.log(`Tabuada do ${number}`);
//     console.log(`${number} x 1 = ${number*1}`);
//     console.log(`${number} x 2 = ${number*2}`);
//     console.log(`${number} x 3 = ${number*3}`);
//     console.log(`${number} x 4 = ${number*4}`);
//     console.log(`${number} x 5 = ${number*5}`);
//     console.log(`${number} x 6 = ${number*6}`);
//     console.log(`${number} x 7 = ${number*7}`);
//     console.log(`${number} x 8 = ${number*8}`);
//     console.log(`${number} x 9 = ${number*9}`);
//     console.log(`${number} x 10 = ${number*10}`);
// }

// tabuada(number);