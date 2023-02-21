//EXERCICIO 2 - A

function somaDeNumeros (num1, num2) {

    const soma = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é de: ${soma}`)

}

somaDeNumeros(25, 32)
somaDeNumeros(20, 30)
somaDeNumeros(50, 120)

//EXERCICIO 2 - B

function ehMaior (num1, num2) {

    const maiorOuIgual = (num1 >= num2)
    console.log(`O ${num1} é maior que o ${num2}? - ${maiorOuIgual}`)

}

ehMaior(25, 25)
ehMaior(50, 17)
ehMaior(20, 78)


//EXERCICIO 2 - C

function ehPar (numero) {

    const verificaPar = numero % 2 ===0
    console.log(`O ${numero} é par? - ${verificaPar}`)

}


ehPar(10)
ehPar(15)
ehPar(20)
ehPar(333)


//EXERCICIO 2 - D


function salario (salarioBruto){

    const INSS = 0.10
    const salarioLiquido = salarioBruto - (salarioBruto*INSS)

    console.log(`O salário liquido é de: R$ ${salarioLiquido.toFixed(2)}`)


}

salario(3000)
salario(1500)
salario(4000)
salario(7819)





/* //PARTE 1
function somaNumeros (num1,num2){
    const soma = (num1+num2)
    console.log(`A soma dos números é: ${soma}`)
    
    }
    
    somaNumeros(1,2)
    somaNumeros(3,5)
    somaNumeros(8,10)
    somaNumeros(4,7)
    somaNumeros(22,456)
    
    
    //PARTE 2
    
    function numeroMaior(num1, num2){
        const verificarNumero = (num1 > num2)
        console.log(`O primeiro número é maior 
            que o segundo? ${verificarNumero}`)
    }
    
    numeroMaior(1,2)
    numeroMaior(3,2)
    numeroMaior(5,7)
    numeroMaior(10,8)
    
    
    //PARTE 3
    
    function numeroPar(num1){
        const verificarPar = (num1%2)===0
    console.log(`O número é par? ${verificarPar}`)
    }
    
    numeroPar(1)
    numeroPar(2)
    numeroPar(3)
    numeroPar(4)
    
    
    //PARTE 4
    
    function salarioLiquido (salarioBruto){
        const salario = (salarioBruto)-(salarioBruto*0.10)
        console.log(`O salário liquido da pessoa é:
        ${salario}`)
        
        return salarioLiquido
    }
    
    salarioLiquido(1000)
    salarioLiquido(2000)
    salarioLiquido(3000) */