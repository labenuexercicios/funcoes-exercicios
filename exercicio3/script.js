
function soma(num1, num2) {
    adicao = num1 + num2
    return adicao
        
}

function subtracao(num1, num2) {
    sub = num1 - num2
    return sub
        
}

function multiplicao(num1, num2) {
    multi = num1 * num2
    return multi
       
}

function divisao(num1, num2) {
    div = num1 / num2
    return div
        
}

const num1 = +prompt("Diga um numero")
const num2 = +prompt("Diga outro numero")

soma(num1, num2)
subtracao(num1, num2)
multiplicao(num1, num2)
divisao(num1, num2)

console.log(adicao)
console.log(sub)
console.log(multi)
console.log(div)