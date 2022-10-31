function soma (num1,num2){
    return num1 + num2
}

function multiplica (num1 , num2){
    return num1 * num2
}

function divide (num1 ,num2){
    return num1 / num2
}
function subtrai (num1 , num2){
    return num1-num2
}

const num1=Number(prompt("Digite um numero aqui!!"))
const num2 =Number(prompt("Digite outro numero!!"))

soma (num1, num2)
multiplica(num1,num2)
divide(num1,num2)
subtrai(num1,num2)


const resultado1=soma(num1,num2)
console.log(resultado1)

const resultado2=multiplica(num1,num2)
console.log(resultado2)

const resultado3=divide(num1,num2)
console.log(resultado3)

const resultado4=subtrai(num1,num2)
console.log(resultado4)

