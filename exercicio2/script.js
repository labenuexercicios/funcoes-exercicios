// EXERCICIO 2

//a)

function somar(numero1, numero2) {
    //somar dos numeros
    const resultado = numero1 + numero2
    console.log (`A soma dos número é: ${resultado}`)

}

somar (5 , 5)
somar (15,20)
somar (19,89)

//b)
function comparar (numero1 , numero2){
    //booleano: se o numero 1 é maior que o numero 2
    const ehMaior = numero1 >= numero2
    console.log(`O primeiro número ${numero1} é maior que o segundo numero ${numero2}? ${ehMaior}`)

}

comparar(45, 56)
comparar(65,23)

//c)
function infoNumero (numero){
    // informar se o número é par
    const ehPar = numero % 2 === 0
    console.log(`O número ${numero} é par? ${ehPar}`)

}

infoNumero(560)
infoNumero(659)
infoNumero(67)
infoNumero(28)

//d) 
function calculaSalario(salario) {
    // receber salario bruto e retornar o salario liquido 
    // com desconto de 10% INSS
    const INSS = 0.1
    const salarioDesconto = salario * INSS
    const salarioFinal = salario - salarioDesconto

return salarioFinal
}

console.log(`O salario com desconto é de: ${calculaSalario(2500)}`)
console.log(`O salario com desconto é de: ${calculaSalario(3500)}`)

