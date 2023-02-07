

//function operacao1 (numero1,numero2){
   // const soma = numero1+numero2
    //console.log(`A soma dos números é de ${soma}`)

//}

//operacao1(3,4)
 
//function operacao2 (numero1,numero2){
 //   const maiorOuIgual = numero1 >= numero2
   // console.log(`se o primeiro numero é maior ou igual ao segundo: ${maiorOuIgual}`)
//}

//operacao2 (3,4)

//function operacao3 (numero) {
  //  const EhPar = numero % 2 ===0
   // console.log(`se é numero par ou nao: ${EhPar}`)
//}

//operacao3 (3)

function operacao4 (salarioBruto){
    const salarioAReceber = [salarioBruto - (salarioBruto * 10/100)]
    
    return salarioAReceber
}

console.log(operacao4(3000))
console.log(operacao4(5000))
console.log(operacao4(7000))

