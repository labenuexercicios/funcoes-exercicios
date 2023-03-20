// # Exercício 3
// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
function soma(x1,x2){
    let som = x1 + x2
    return(`A soma de x1 e x2 é ${som}`)
}
function subtracao(x1,x2){
    let sub = x1-x2
    return(`A subtração de x1 e x2 é ${sub}`)
}
function multiplicação(x1,x2){
    let mult = x1*x2
    return(`A multiplicação de x1 e x2 é ${mult}`)
}
function divisão(x1,x2){
    let div = x1/x2
    return(`A divisão de x1 e x2 é ${div}`)
}
// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
let numero1 = Number( prompt("escolha um valor para x1") )
let numero2 = Number( prompt("escolha um valor para x2") )
// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
let respostaSoma = soma(numero1,numero2)
let respostaSub = subtracao(numero1,numero2)
let respostaMult = multiplicação(numero1,numero2)
let respostaDiv = divisão(numero1,numero2)
// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
console.log(respostaSoma)
console.log(respostaSub)
console.log(respostaMult)
console.log(respostaDiv)

