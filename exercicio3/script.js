function meusNumeros1(n1,n2) {
    const somaDosNumeros=n1+n2
    console.log(somaDosNumeros);
}

function meusNumeros2(n1,n2) {
    const subtracaoDosNumeros=n1-n2
    console.log(subtracaoDosNumeros);
}

function meusNumeros3(n1,n2) {
    const multiplicacaoDosNumeros=n1*n2
    console.log(multiplicacaoDosNumeros);
}

function meusNumeros4(n1,n2) {
    const divisaoDosNumeros=n1/n2
    console.log(divisaoDosNumeros);
}

meusNumeros1(1011,1011)

meusNumeros2(1500,100)

meusNumeros3(10,1000)

meusNumeros4(12,24)

//-------------------------------------

function numeroUsuario1(n1, n2) {
    return (n1+n2)
}

const num1 = +prompt('Insira um numero')
const num2 = +prompt('Insira outro numero')
const resultado = numeroUsuario1(num1, num2)

console.log(resultado);


function numeroUsuario2(n1, n2) {
    const numero1= n1-n2
    return numero1
}

console.log(numeroUsuario2(num1, num2));

function numeroUsuario3(n1, n2) {
    const numero2= n1*n2
    return numero2
}

console.log(numeroUsuario3(num1+num2));

function numeroUsuario4(n1, n2) {
    const numero3= n1/n2
    return numero3
}

console.log(numeroUsuario4(num1+num2));