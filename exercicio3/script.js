console.log("EXERCICIO 3")

//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma(num, numm) {
let total =  num + numm
return total
}
let primeiroNum = Number (prompt("coloque 1 numero"))
let segundoNum = Number (prompt("coloque outro numero"))

console.log(soma(primeiroNum, segundoNum))


function subtrai(num, numm) {
    let subtrair = num - numm
    return subtrair
}
console.log(subtrai(primeiroNum, segundoNum))

function multiplica(num, numm) {
    let multiplicar = num + numm
    return multiplicar
}
console.log(multiplica(primeiroNum, segundoNum))


function dividi(num, numm) {
    let dividir = num + numm
    return dividir
}
console.log(dividi(primeiroNum, segundoNum))



// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.




// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.


// subtrai(primeiroNum, segundoNum)
// multiplica(primeiroNum, segundoNum)
// dividi(primeiroNum, segundoNum)


//Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.







