//A)
/*
function soma(n1, n2) {
    const soma = n1 + n2
    console.log(soma)


}

soma(2, 5)

*/



/////////////////////////////////////////////////

//B)
/*
function numeroBooleano(n1, n2) {
    const compara1 = n1 >= n2
    console.log(`o numero ${n1} é maior ou igual a ${n2}? ${compara1}`)

}

numeroBooleano(3,2)

*/

//C)

function verificaParidade (n1) {
    const ehPar = n1 % 2 === 0
    const frase = `o ${n1} é par? ${ehPar}`
    console.log(frase)
}


//D) 
function calcular (salario) {
    const descontoINSS = salario * 0.1
    const salarioLiquido = salario - descontoINSS

    return salarioLiquido
}


console.log(calcular(1800))
console.log(calcular(1600))
