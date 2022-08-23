let soma = (x,y) =>{
        return x+y
}

let sub = (x,y) =>{
    return x-y
}

let multi = (x,y) => {
    return x*y
}

let div = (x,y) => {
    return x/y
}

let n1 =+ prompt (`digite o primeiro numero`)
let n2 =+ prompt (`digite o segundo numero`)

console.log(`a soma dos numeros ${n1} e ${n2} é: ${soma(n1,n2)} \na subtração é:  ${sub(n1,n2)} \na multiplicação é: ${multi(n1, n2)} \na divisão é ${div(n1,n2)}`)
