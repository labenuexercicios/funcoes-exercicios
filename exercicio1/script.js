/* function meuNome (nome) {
    const Nome = `Olá, ${nome}`
    console.log(Nome)
}

meuNome(prompt("digite seu nome")) */

function tabuada(num) {
    const op1 = num*1
    const op2 = num*2
    const op3 = num*3
    const op4 = num*4
    const op5 = num*5
    const op6 = num*6
    const op7 = num*7
    const op8 = num*8
    const op9 = num*9
    const op10 = num*10

console.log(`
O resultado da tabuada é: 
${num} * 1  = ${op1}
${num} * 2  = ${op2}
${num} * 3  = ${op3}
${num} * 4  = ${op4}
${num} * 5  = ${op5}
${num} * 6  = ${op6}
${num} * 7  = ${op7}
${num} * 8  = ${op8}
${num} * 9  = ${op9}
${num} * 10 = ${op10}
`)
}

tabuada(prompt("Digite um número"))

const tabuada2 = (num2) => {

    const op1 = num2*1
    const op2 = num2*2
    const op3 = num2*3
    const op4 = num2*4
    const op5 = num2*5
    const op6 = num2*6
    const op7 = num2*7
    const op8 = num2*8
    const op9 = num2*9
    const op10 = num2*10

console.log(`
O resultado da tabuada 2 é: 
${num2} * 1  = ${op1}
${num2} * 2  = ${op2}
${num2} * 3  = ${op3}
${num2} * 4  = ${op4}
${num2} * 5  = ${op5}
${num2} * 6  = ${op6}
${num2} * 7  = ${op7}
${num2} * 8  = ${op8}
${num2} * 9  = ${op9}
${num2} * 10 = ${op10}
`)

}

tabuada2(prompt("Digite um número2"))
