// LETRA A:

function numeros(num1, num2){
    console.log(num1 + num2)
}

numeros(4,1)

// LETRA B:

function maior(num1, num2){
    if(num1 >= num2 ){
        console.log("Sim, é maior!")
    }else{
        console.log("Não é maior!")
    }
}
 maior(8,3)

 // LETRA C:

 function numero(num){
    if(num % 2 === 0){
        console.log("É par!")
    }else{
        console.log("Não é par")
    }
 }

 numero(8)

 // LETRA D:

 function frase(minhaFrase){
    console.log("Tamanho: ", minhaFrase.length, minhaFrase.toUpperCase())  
 }
 frase(prompt("Digite sua frase favorita: "))