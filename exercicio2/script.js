//Exercicio 02
// a)

function soma(num1,num2) {
    console.log(`${num1} + ${num2} = ${num1+num2}`)

}

soma(3,5)
soma (3,6)

// b)

function comparativoNum(num1,num2){
    console.log(num1 >= num2)
}

comparativoNum(3,7)
comparativoNum(5,5)

// c)

function NumParicidade(numero){
    console.log(`O número ${numero} é par?`)
    console.log(numero % 2 === 0)
}

NumParicidade(4)
NumParicidade(7)


// d)

function salario(valor) {
    const descontoInss = 0.10
    console.log(`Se o seu salário é ${valor}`)
    console.log(`O salario com desconto ficaria ${valor-(valor*descontoInss)}`)
}

salario(1000)
salario(4000)