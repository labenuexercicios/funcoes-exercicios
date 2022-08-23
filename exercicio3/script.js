let operacaoAritimetica = (num1, num2) =>{
    multi = `Multiplicando: ${num1} x ${num2} = ${num1*num2}`
    somar = `Soma: ${num1} + ${num2} = ${num1+num2}`
    menos = `Subtração: ${num1} - ${num2} = ${num1-num2}`
    dividir = `Divisão: ${num1} / ${num2} = ${num1/num2}`
    return console.log(`${somar} \n ${menos} \n ${multi} \n ${dividir}`);
}

let input =[]
for (i = 0; i <= 1; i++) {
    input[i]= Number(prompt(`Digite o ${i+1}º numero`))
}
operacaoAritimetica(input[0], input[1])

console.log(multi);