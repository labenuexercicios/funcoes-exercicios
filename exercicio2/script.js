function numeros(num1,num2){
    console.log(num1+num2)
}
numeros(5,3)

function booleano(num3,num4){
    console.log(num3>=num4)
    return
}
booleano(1,2)


function parImpar(num5){
    if(num5%2===0){
        console.log('Numero e par')
        return
    }console.log('Numero e impar')
}
parImpar(+prompt('Insira um numero'))

function Mensagem(string){
    console.log(`Numero de letras: ${string.length}, da frase ${string.toUpperCase()}`)
}
Mensagem('Ola munDO')