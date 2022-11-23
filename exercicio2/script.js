function recebe2numeros (x, y){
    let resultado = x + y
    console.log(resultado)
    return resultado
}

function imprimiresultado (x) {
    console.log(x)
}

let g = Number(prompt("Digite o valor do número 1"))
let h = Number(prompt("Digite o valor do número 2"))

const passa2numeros = recebe2numeros(g,h)
imprimiresultado(passa2numeros)

function comparanumero (x , y) {
    if(x >= y){
        return x === y || x >= y
    }
    else
        return !x === y || !x >= y
}

g = Number(prompt("Fala man digita 1 número pa nois"))
h = Number(prompt("Digite mais 1 :)"))

const recebecomparacao = comparanumero(g, h)
console.log(recebecomparacao)

function confereseepar (x) {
    let resultado
    if(x % 2 === 0){
        resultado = x
        return resultado, "É par."
    }
    else
    return "É impar"
}

g = Number(prompt("Eai digita 1 número ae"))
console.log(confereseepar(g))

function recebesalario (x){
    let resultado
    let valordescontado
    valordescontado = x * 0.1
    resultado = x - valordescontado
    return resultado
}

let salario = Number(prompt("Digite o valor do salário"))
let passasalario = recebesalario(salario)
console.log(passasalario)

