// function MyName(name){
//     return `Olá, ${name}`
// }
// console.log(MyName('Luan'))

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// function tab(numUser){
//     for(number of numbers){
//         console.log(numUser * number)
//     }
// }

// tab(5)

const MyName = function(name){
    return `Olá, ${name}`
}

console.log(MyName(prompt('Qual o seu nome')),'\n\n')


let numbers = [1,2,3,4,5,6,7,8,9,10]

const tab = (numUser) => {
    for(number of numbers){
        console.log(`${numUser} x ${number} = ${numUser * number}`)
    }
}

tab(prompt(`Agora, insira um número para nossa tabuada, por favor: `))