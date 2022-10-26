function soma (num1, num2) {
    const result = num1 + num2
    return `Soma é ${result}`
}
function subtraçao (num3, num4) {
    const result1 = num3 - num4
    return `Subtraçao é ${result1}`
}
function mult (num5, num6) {
    const result2 = num5 * num6
    return `multiplicaçao é ${result2}`
}
function div (num7, num8) {
    const result3 = num7 / num8
    return `divisao é ${result3}`
}

let param1 = Number( prompt ("Digite um numero:"))
let param2 = Number(prompt ("Digite outro numero:"))

console.log(soma (param1, param2))
console.log(subtraçao (param1, param2))
console.log(mult (param1, param2))
console.log(div (param1, param2))

