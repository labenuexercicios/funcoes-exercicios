//a) Uma função que receba 2 números como parâmetros, e, dentro da função,
// faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function receber(num1,num2){
    let soma = num1 + num2
    return soma
}
console.log(receber(10,5))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    function comparar(num1,num2){
        return num1 >= num2
    }
     console.log(comparar(20,16))

    //  Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

    const paridade = num => 
    num %2===0  
    console.log(paridade(16))

    // Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

    const valorSalario = valor => 
  valor - (valor*0.1)
  console.log(valorSalario(1000))


    