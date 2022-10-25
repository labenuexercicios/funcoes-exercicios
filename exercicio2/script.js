//Letra a

const numerosSoma = (num1, num2) => {
    const soma = num1+num2;
    console.log(soma);
    return soma;
   }

const somaP = numerosSoma(4,8)
console.log(somaP);


//Letra b

const doisNumeros = (num3, num4) => {
    let teste
    if(num3 >= num4){
        teste = true;
    }else {
        teste = false;
    }
    console.log(teste);
}

doisNumeros(5,10)

//let teste = num3>=num4
//console.log(num3>=num4)


//Letra c

const numeroPar = (numero) => {
    if(numero%2 === 0){
        console.log(`Esse número é par`)
    } else{
        console.log(`Esse número é ímpar`)
    }
    return(numero)
}

const verificacao = numeroPar(10)
console.log(verificacao)

//Letra d

 const mensagem = (userInput) => {
    console.log(`quantidade de letras na palavra:${userInput.length}`)
    console.log(`${userInput.toUpperCase()}`)
}
mensagem(prompt("Digite uma palavra:"))
