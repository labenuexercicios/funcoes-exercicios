function Sum(n1, n2) {
    return `${n1} + ${n2} = ${n1 + n2}`
}
//////////////////////////////////////////
console.log(Sum(Number(prompt('Escolha dois numeros para SOMAR: ')), Number(prompt('Escolha o outro:'))))
//////////////////////////////////////////
function sub(n1, n2) {
    return `${n1} - ${n2} = ${n1 - n2}`
}
console.log(sub(prompt('Escolha dois numeros para SUBTRAIR: '), prompt('Escolha o outro:')))
//////////////////////////////////////////
const mult = function (n1, n2) {
    return `${n1} x ${n2} = ${n1 * n2}`
}
console.log(mult(prompt('Escolha dois numeros para MULTIPLICAR: '), prompt('Escolha o outro:')))
/////////////////////////////////////////
const div = (n1, n2) => {
    return `${n1} / ${n2} = ${n1 / n2}`
}
console.log(div(prompt('Escolha dois numeros para DIVIDIR: '), prompt('Escolha o outro:')))
