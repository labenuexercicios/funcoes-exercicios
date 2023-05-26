//a

function somaNum (num1, num2){
    const soma = num1 + num2
    console.log(soma)
}

somaNum(10, 100)

//b

function comparaNum (num1, num2){
    const compara = num1 >= num2
    console.log(compara)
}

comparaNum(5, 5)

//c

function verificaNum (num){
    const verifica = (num % 2 == 0 )
    console.log(verifica)
}

verificaNum(10)

//d

function salarioLiq(valor){
    const salario = valor - (valor * 0.1)
    console.log(`Seu salalário liquido é R$${salario}`)
}

salarioLiq(1000)