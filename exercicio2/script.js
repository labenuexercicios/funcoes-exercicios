//EXERCÍCIO 02
//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

// function soma (num1,num2){  
//     console.log((+prompt("Número 1"))+(+prompt("Número 2")))
// }

// soma()  

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
// const num1 = +prompt("Número 1")
// const num2 = +prompt("Número 2")

// function maiorIgual (num1,num2){    
//     console.log("o 1º número é maior ou igual ao 2º número?")
//     console.log(num1>=num2)
// }

// maiorIgual(+prompt("Número 1"),+prompt("Número 2"))

//c) Uma função que receba um número e imprima se ele é par ou não

// const num = +prompt("Insira um número")

// function paridade (num){    
//     if(num%2===0){  
//         console.log("O número inserido é par.")
//     }else{  
//         console.log("O número inserido é ímpar.")
//     }
// }

// paridade(num)

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const mensgString = prompt("Insira uma mensagem.")

function impMensagem (mensgString){ 
    console.log(mensgString.length)
    console.log(mensgString.toUpperCase())
}

impMensagem(mensgString)
