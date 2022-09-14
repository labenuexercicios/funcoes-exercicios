
//a)
function soma(num1,num2){
    return num1+num2
}

console.log(soma(3,5))


//b)
function boolean (numero1,numero2){
    return numero1>=numero2
}

console.log(boolean(4,3))

//c)
function par(num){
     return num%2===0
}

const numPar = prompt("Escolha um número")
console.log(`\nO número ${numPar} é par?`)
console.log(par(numPar))

//d)
function string(ola){
    
let tamanho = ola.length
let caps = ola.toUpperCase()

return console.log(`A string tem tamaho: ${tamanho}\n`,caps)

}

string("Bailarina")