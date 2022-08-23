function doisNumeros(n1, n2) {
    const somaDosNumeros= n1 + n2
    console.log(somaDosNumeros);
}

doisNumeros(6,12)

//--------------------------------------

function verificacaoNumero (n1,n2) {
    if(n1>=n2){
        console.log('O primeiro numero é maior que o segundo');
    }else{
        console.log('O primeiro numero é menor que o segundo');
    }
    return verificacaoNumero
}

//--------------------------------------

verificacaoNumero(1500,12)

function vendoSeEhPar(n1) {
    if (n1%2===0) {
        console.log('O numero é par');
    }else{
        console.log('O numero é impar');
    }
    return vendoSeEhPar
}

vendoSeEhPar(43)

//--------------------------------------

function letras(strings) {
    return (`${strings.length} ${strings.toUpperCase()}`)
}

console.log(letras('Leonardo'));