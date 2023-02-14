//A)
function op1(num1, num2) {
    resultado = num1 + num2
    console.log(`A soma do ${num1} + ${num2} é: ${resultado}`)
}
op1(Number(num1=(prompt("Soma"))), Number(num2=(prompt("Soma"))))

//B)
function op2(num1, num2) {
    maiorOuIgual = num1 >= num2
    console.log(`Se o ${num1} é maior ou igual ao ${num2}: ${maiorOuIgual}`)
}
op2(Number(num1=(prompt("maiorOuIgual"))), Number(num2=(prompt("maiorOuIgual"))))

//C)
function op3 (num1) {
    imparOuPar = num1 % 2 === 0
    console.log(`Se é numero par ou não: ${imparOuPar}`)
}

op3(Number(num1=(prompt("Impar ou Par"))))

//D)
function op4(salario) {
    descInss = salario * 0.1
    salarioLiquido = salario - descInss 
    console.log(`O seu salário líquido é: ${salarioLiquido}`)
    console.log(`o desconto do INSS é: ${descInss}`)
}
op4(Number(salario=prompt("Digite seu salário")))