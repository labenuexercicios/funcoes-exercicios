const soma = (num1, num2) => {
    let operacao = num1 + num2
    console.log(operacao)
    
}

const subtracao = (num3, num4) => {
  let operacao = num3 - num4
  console.log(operacao)
}



const multiplicacao = (num5, num6) => {
    let operacao = num5 * num6
    console.log(operacao)
}


const divisao = (num7, num8) => {
    let operacao = num7 / num8
    console.log(operacao)

}

let primeiro = Number(prompt("Insira um número"))
let segundo = Number(prompt("Insira outro número"))
soma(primeiro,segundo)
subtracao(primeiro,segundo)
multiplicacao(primeiro,segundo)
divisao(primeiro,segundo)