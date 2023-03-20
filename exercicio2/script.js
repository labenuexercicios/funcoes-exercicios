const soma = (n1, n2) => {
    // Recebe 2 números e realiza a soma entre eles
    return console.log(`A soma entre ${n1} e ${n2} é igual a ${n1 + n2}`)
}

// soma(2, 1)

const maiorIgual = (n1, n2) => {
    // Recebe 2 números e verifica se o primeiro número é igual ou maior que o segundo
    return console.log(`O primeiro número é maior ou igual ao segundo? : ${n1 >= n2 ? true : false}`)
}

// maiorIgual(2, 2)


const numeroPar = (n1) => {
    //Recebe um número e verifica se o mesmo é PAR
    return console.log(`O número ${n1} é Par? ${n1 % 2 === 0 ? true : false}`)
}

// numeroPar(2)

const salarioLiquido = (valor) => {
    // Recebe o salário bruto e retorna o salário líquido com 10$ de desconto do INSS
    return `Valor Bruto = ${valor} // Valor Líquido = ${valor * 0.9}`
}

// console.log(salarioLiquido(1000))


