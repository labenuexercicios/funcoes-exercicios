function num(num1,num2) {
    var num3 = 0
    num3= Number(num1) + Number(num2)
    return num3
}

console.log(num(4,3))


function igualmaior(x,y){
    var verdade = 0
    verdade = Number(x) >= Number(y)
    return verdade
}

console.log(igualmaior(6,3))



function imparoupar(x){
    if ((Number(x) % 2) === 0) {
        console.log("numero par")
    } else {
        console.log("numero impar")
    }
}



console.log(imparoupar(prompt("qual o valor?")))


function tamanho(string){
    var letras = 0
    letras = string.length
    console.log(letras)
    console.log((string).toLocaleLowerCase())
}

console.log(tamanho(prompt("qual é a palavra?")))