function soma (param1, param2) {
    const result1 = param1 + param2
    console.log(result1)
}
soma (2,2) 

function booleano (num1, num2) {
    const result2 = num1>=num2
    console.log(result2)
}
booleano (5,3)

function par (num) {
    const result3 = (num%2)===0
    console.log(result3)
}
par (10)

function salario (valor) {
    let inss = valor * 0.1
    let desc = valor - inss
    return desc
}
console.log(salario(2.000))