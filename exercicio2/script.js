// Declare e chame as funções abaixo:



// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const handleNumber = (num1, num2) => {
    return num1+num2
}
console.log(handleNumber(3, 77))



// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const handleBool = (num1, num2) => {
    return num1 > num2 || num1 === num2
}
console.log(handleBool(79, 77))


// c) Uma função que receba um número e imprima se ele é par ou não


const handleNumberPar = (num1) => {
    let numeroPar = 0
    if (num1 % 2===0){
        numeroPar = console.log(`O numero ${num1} e par`)
    }else{
        numeroPar = console.log(`O numero ${num1} nao e par`)
    }
    return numeroPar
}
handleNumberPar(5)


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const string = 'Minha string'

const handleString =(string) => {
    let newString = string.toUpperCase()
    let tamanho = string.length
    
    for(tamanho in string){
        tamanho.length  
    }
    return console.log(`${tamanho} e ${newString}`)
    
    //return console.log(`O tamanho da string e de ${tamanho} e a nova versao e de ${newString}`)
}

handleString(string)

