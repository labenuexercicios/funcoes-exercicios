// função nomeada
function nomeFuncao () {
    //corpo da função 
}

// função anonima
const funcao = function () {
    //corpo da função
}

// arrow function
const funcaoArrow = () => {

}

() => {}

/* const imprimirNome = (nome) => {
    console.log(nome)
}

imprimirNome(`nobu`) */

const imprimirNome = (nome) => {
    return `Ola ${nome}`
}

console.log(imprimirNome(`nobu`))

const imprimir = function (nome1) {
    console.log(`Ola ${nome1}, isso é uma função não nomeada`)

}

imprimir("Livia")



const somar = (num1, num2) => {
    const soma = num1 + num2
    return soma
}
console.log(somar(4, 2))

const numeropar = (num) => {
    const par = num % 2 === 0
    console.log(par)
    const soma = num + 10
    console.log(soma)
    const multiplacao = num * num
    console.log(multiplacao)
    return `o número ${num} é par? ${par}, somando com 10 o resultado é ${soma}
    e multiplicado por ele mesmo é ${multiplacao}`
}
//armazenando o retorno da funcao em uma variavel
const resultado = numeropar(10)

//chamando a funcao e mostrando no console
numeropar(4)
console.log(numeropar(4))









////////////////////////


const autenticar = (login, senha) => {
    const loginArmazenado = "nobumbum"  
    const senhaArmazenada = "1234e4321"

    const loginverificado = loginArmazenado === login
    const senhaverificado = senhaArmazenada === senha

    const logar = loginverificado && senhaverificado

    return logar
}
console.log(autenticar("nobumbum", "1234e4321"))


const verificacao = (nome, anoNascimento, anoAtual) => {
    verIdade = anoAtual - anoNascimento >= 18
    return `${nome}, é maior de idade? ${verIdade}`
}
console.log(verificacao(`joao`, 1993, 2022))
console.log(verificacao(`carlao`, 2004, 2022))


////////////////////////////////////////////////////////////////exercicio 1

function seuNome (nome) {
    return `Ola, ${nome}.`
}
console.log(seuNome(`Nobu`))


////////////////////////////////////////////////////////////////exercicio 2

function tabuada (numero) {
    return `a tabuada do numero ${numero} é ${numero}, ${numero*2},
    ${numero*3}, ${numero*4}, ${numero*5}, ${numero*6}, ${numero*7},
    ${numero*8}, ${numero*9}, ${numero*10}`
}
console.log(tabuada(3))
console.log(tabuada(9))
console.log(tabuada(4))
console.log(tabuada(7))

const tabuada2 = (numero) => {
    return `a tabuada do numero ${numero} é ${numero}, ${numero*2},
    ${numero*3}, ${numero*4}, ${numero*5}, ${numero*6}, ${numero*7},
    ${numero*8}, ${numero*9}, ${numero*10}`
}
console.log(tabuada2(3))