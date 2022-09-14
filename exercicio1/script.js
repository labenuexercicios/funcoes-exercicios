// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function meuNome(nome)
// {
//     console.log("olá, " + nome)
// }

// meuNome(prompt("digite seu nome"))

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// function tabuada(num)
// {
//     for(i=1; i<11; i++)
//     {
//         console.log(num + " x " + i + " = " + num * i)
//     }
// }
// tabuada(prompt("digite o número para ver a sua tabuada"))

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, 
// ou __arrow functions__ 

const meuNome = function(nome)
{
    console.log("olá, " + nome)
}
meuNome(prompt("digite seu nome"))

const tabuada = (num) => {
    for(i=1; i<11; i++)
    {
        console.log(num + " x " + i + " = " + num * i)
    }
}
tabuada(prompt("digite o número para ver a sua tabuada"))


