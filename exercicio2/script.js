console.log("EXERCICIO 2")
console.log("questao a:")

function somar(num1, num2) {
    const somaNum = (num1 + num2)
    console.log(somaNum)
}
somar(1,7)

console.log("questao b:")

function identificarnum( num1, num2) {
    let idNumero = (num1 >= num2 )
    console.log(idNumero)
}
identificarnum(70, 40)

console.log("questao c:")

function paridade(numb) {
    let parr = numb %2 === 0
    console.log(`o numero ${numb} é par? ${parr}`)
 }
 
paridade(22)

console.log("questao d:")
// Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salario(valor) {
    const desconto = valor * 0.1
    const liquido = valor - desconto
    return liquido
}
console.log("o salario liquido é", salario(2000))
