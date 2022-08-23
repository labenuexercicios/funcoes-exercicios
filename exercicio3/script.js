var num1 = Number(prompt('Digite um número: '))
var num2 = Number(prompt('Digite mais um número: '))

soma = (num1,num2) => soma = num1 + num2
subt = (num1,num2) => subt = num1 - num2
multi = (num1,num2) => multi = num1 * num2
div = (num1,num2) => div = num1 / num2

console.log(`${soma(num1,num2)}\n${subt(num1,num2)}\n${multi(num1,num2)}\n${div(num1,num2)}`)

