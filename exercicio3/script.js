// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
function somar(num1,num2){
    let soma = num1 + num2
    return soma
}
function sub(num1,num2){
    let sub = num1 - num2
    return sub
}

function multiplicar(num1,num2){
    let mult = num1 * num2
    return mult
}

function dividir(num1,num2){
    let div = num1 / num2
    return div
}
console.log(
    somar(11,9), sub(9,8), multiplicar(10,10), dividir(5,5)
)

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
const inserirNum = Number(prompt("insira um número"))
const inserirNum2 = Number(prompt("insira outro número"))
console.log(inserirNum, inserirNum2)
console.log(
somar(inserirNum, inserirNum2), sub(inserirNum, inserirNum2), multiplicar(inserirNum, inserirNum2), dividir(inserirNum, inserirNum2)
)
// Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

 const receberSoma = somar(inserirNum, inserirNum2)
 const receberSub = sub(inserirNum, inserirNum2)
 const receberMult =  multiplicar(inserirNum, inserirNum2)
 const receberDiv =  dividir(inserirNum, inserirNum2)
 
 console.log(receberSoma, receberSub, receberMult, receberDiv)