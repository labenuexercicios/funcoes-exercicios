/*const lerNumero = (n1 , n2)=>{

const soma= n1+n2

console.log(soma)

}

lerNumero(10,20)*/

/*Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número 
é **maior ou igual** ao segundo. */

/*const lerNumero=(n1 , n2) =>{
 
const numeroIgualOuMaior= n1 >=2

console.log(numeroIgualOuMaior)
}

lerNumero(20 , 10) */

/*Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.*/

/*const lerNumero = (n1) =>{

const numeroPar= n1 %2 === 0

console.log (numeroPar)

}
 
lerNumero(10)


/*Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.*/

const salario = (n1) =>{

    let salarioInss= n1 * 0.01
    let salarioLiquido= n1-salarioInss
    console.log(salarioLiquido)
const resposta= console.log(`o salário liquido é ${salarioLiquido}`)
return resposta
}

salario(200)

