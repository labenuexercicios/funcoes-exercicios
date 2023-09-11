// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função 
// e verifique o resultado no console.

const somarNumeros = (numero1 , numero2)=>{
   const soma =  numero1 + numero2 
   console.log(`A soma de ${numero1} e ${numero2} é : ${soma}`);
   return [numero1, numero2]
   
};
somarNumeros(10,15)


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número 
// é **maior ou igual** ao segundo.

const verificarMaiorOuIgual = (numero1, numero2)=>{
    const verifica = numero1 >= numero2
    console.log(`O número ${numero1} é maior ou igual do que o numero ${numero2}? ${verifica}`);
    return [numero1, numero2]
};
verificarMaiorOuIgual(10,15)


// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const verificarPar = (numero)=>{
    const veficarPar = numero %2 === 0
    console.log(`O número ${numero} é par? ${veficarPar}`);
    return numero
};
verificarPar(15)


// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, 
// referente ao INSS.

const descontarInss = (salarioBruto)=>{
    const descontoInss = 0.1
    const desconto = salarioBruto * descontoInss
    const salarioLiquido = salarioBruto - desconto
    return salarioLiquido

};
console.log(descontarInss(2000.00))

