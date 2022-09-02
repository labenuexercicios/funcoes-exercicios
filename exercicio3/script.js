let a = Number(prompt('Digite 1ª'))
let b = Number(prompt('Digite 2ª'))

function soma(a,b){
    console.log(`a soma é: ${a+b}`)
}

soma(a,b)

function sub(a,b){
    console.log(`a subtração é ${a-b}`)

}

sub(a,b)

function div(a,b){
    if(b!=0){
        console.log(a/b)
    }else{
        console.log('divisão impossível')
    }
}

div(a,b)

function multi(a,b){
    console.log(`a multiplicação é ${a*b}`)
}

multi(a,b)