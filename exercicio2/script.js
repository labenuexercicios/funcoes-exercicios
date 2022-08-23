function Soma(n1,n2) {
    console.log(n1 + n2)
    return n1 + n2
}

console.log(Soma(Math.random() * 10, Math.random() * 10))

function MaiorOuIgual(n1, n2) {
    console.log(n1 >= n2)
}

MaiorOuIgual(1,1)

function éPar(num) {
    console.log(num % 2 === 0 && num !== 0)
}

éPar(2)

function TudoMaiusculo(Str) {
    console.log(`${Str.length}: ${Str.toUpperCase()}`)
}

TudoMaiusculo("Disneyworld :)")