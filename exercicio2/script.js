const soma = (a, b) => {
    const resultado = a + b
    console.log(resultado)
}
soma(192345, 12892134291)


////////// operador ternario


function alguma (a, b) {
    return ((a > b)? `verdadeiro` : `falso`)
}
console.log(alguma(8,4))

////

const alguma1 = (a, b) => {
    return (a >= b)
}
console.log(alguma1(3, 8))

///////

const algo = (numero) => {
    const resultado = numero % 2 == 0
    console.log(resultado)
}
algo(4)

///// 

const salarioinss = (salario) => {
    const salariofinal = salario * 0.9
    console.log(salariofinal)
}
salarioinss(1.212)