//a //estudar tudo, até entender
const soma = (num1, num2) =>{
    return num1 + num2
}
console.log(soma(13,10));



//b//estudar tudo, até entender
function numeros(num1, num2) {
    let booleano
        if (num1 >= num2) {
            booleano = true
    } else{
        booleano = false
    } return booleano
}console.log(numeros(14,14))


// //c //estudar tudo, até entender
// function par(num1) {
//     if (num1 %2 === 0) {
//         return  `o numero é par`
//     }else{
//         return `O numero é impar`
//     }
// }console.log(par(prompt(`Digite um numero`)));

const numpar = prompt(`Digite um numero`)
function par(num) {
    if (num %2 ===0) {
        return `O numero é par`
    }else{
        return `O numero é Impar`
    }
}console.log(par(numpar));