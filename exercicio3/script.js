function soma (x,y){
    let resultado
    resultado = x + y
    return resultado
}

function subtracao(x,y) {
    let resultado
    resultado = x - y
    return resultado
}

function divisao(x,y){
    let resultado
    resultado = x / y
    return resultado
}

function multiplicacao(x,y){
    let resultado
    resultado = x * y
    return resultado
}

let var1 = Number(prompt("Digite o valor do primeiro número"))
let var2 = Number(prompt("Digite o valor do segundo número"))

console.log(soma(var1, var2), subtracao(var1, var2), divisao(var1,var2), multiplicacao(var1, var2))

let resultadosoma = soma(var1,var2)
let resultadosubtracao = subtracao(var1,var2)
let resultadodivisao = divisao(var1,var2)
let resultadomultiplicacao = multiplicacao(var1,var2)

console.log("O resultado da soma é:\n",resultadosoma,"\nO resultado da subtração é:\n",resultadosubtracao, "\nO resultado da divisão é:\n",resultadodivisao,"\nO resultado da multiplicação é:\n", resultadomultiplicacao)