//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

let numerosUsuario1 = Number(prompt("Insira um numero"));
let numerosUsuario2 = Number(prompt("Insira outro numero"))

function Parametrosnumericos1 (num1, num2) {
    return num1 + num2;
}
console.log(Parametrosnumericos1(numerosUsuario1, numerosUsuario2))

function Parametrosnumericos2 (num11, num21) {
    return num11 - num21
}
console.log(Parametrosnumericos2(numerosUsuario1, numerosUsuario2))

function Parametrosnumericos3 (num12, num22) {
    return num12*num22
}
console.log(Parametrosnumericos3(numerosUsuario1, numerosUsuario2))

function Parametrosnumericos4 (num13, num23) {
    return num13 / num23
}
console.log(Parametrosnumericos4(numerosUsuario1, numerosUsuario2))



//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações