const nome = prompt("qual o seu nome?")

function chamarNome(nome) {
    return `Olá, ${nome}`

}
console.log(chamarNome(nome))

// Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.
console.log("Tabuada do número")

function tabuada(num) {
    let tabuadaResultado = num * 1
    console.log(`${num} x 1 = `, tabuadaResultado)
    tabuadaResultado = num * 2
    console.log(`${num} x 2 = `, tabuadaResultado)
    tabuadaResultado = num * 3
    console.log(`${num} x 3 = `, tabuadaResultado)
    tabuadaResultado = num * 4
    console.log(`${num} x 4 = `, tabuadaResultado)
    tabuadaResultado = num * 5
    console.log(`${num} x 5 = `, tabuadaResultado)
    tabuadaResultado = num * 6
    console.log(`${num} x 6 = `, tabuadaResultado)
    tabuadaResultado = num * 7
    console.log(`${num} x 7 = `, tabuadaResultado)
    tabuadaResultado = num * 8
    console.log(`${num} x 8 = `, tabuadaResultado)
    tabuadaResultado = num * 9
    console.log(`${num} x 9 = `, tabuadaResultado)
    tabuadaResultado = num * 10
    console.log(`${num} x 10 = `, tabuadaResultado)
}
console.log(tabuada(2))



const tabuada2 = num => {
    return `10 x 1 = ${num * 1}
            10 x 2 = ${num * 2}
            10 x 3 = ${num * 3}
            10 x 4 = ${num * 4}
            10 x 5 = ${num * 5}
            10 x 6 = ${num * 6}
            10 x 7 = ${num * 7}
            10 x 8 = ${num * 8}
            10 x 9 = ${num * 9}
           10 x 10 = ${num * 10}` 
}
console.log(tabuada2(10))


