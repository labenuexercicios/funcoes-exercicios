console.log("EXERCICIO 1")

console.log("questao a:")

function olaEu(nome) {
    console.log(`Olá ${nome}! `)
}
olaEu("Mirian")

console.log("questao b:")


function tabuada(numero) {
    const x1 = numero* 1 
    const x2 = numero* 2 
    const x3 = numero* 3
     const x4 = numero* 4
      const x5 = numero* 5 
      const x6 = numero* 6 
      const x7 = numero* 7
       const x8 = numero* 8
       const x9 = numero* 9
    console.log( x1, x2, x3, x4, x5, x6, x7, x8, x9)
}
tabuada(3)
tabuada(7)
tabuada(8)


console.log("questao c:")
console.log("funçao nao nomeada")

const falarUmOla = function olaEu(nome) {
    console.log(`Olá ${nome}! `)
}
falarUmOla("Mirian")

const tabuadadez = function tabuada(numero) {
    const x1 = numero* 1 
    const x2 = numero* 2 
    const x3 = numero* 3
     const x4 = numero* 4
      const x5 = numero* 5 
      const x6 = numero* 6 
      const x7 = numero* 7
       const x8 = numero* 8
       const x9 = numero* 9
    console.log( x1, x2, x3, x4, x5, x6, x7, x8, x9)}

    tabuadadez(3)
    console.log("funçao Arrow")

    const arrowOla = (nome) => {
        console.log(`Olá ${nome}! `)
    }
    arrowOla("Mirian")

    const funçaoArrow = (numero) => {
        const x1 = numero* 1 
        const x2 = numero* 2 
        const x3 = numero* 3
         const x4 = numero* 4
          const x5 = numero* 5 
          const x6 = numero* 6 
          const x7 = numero* 7
           const x8 = numero* 8
           const x9 = numero* 9
        console.log( x1, x2, x3, x4, x5, x6, x7, x8, x9)}

funçaoArrow(3)





console.log("Com ajuda do coleguinha")
const tabuadaa = (numero) => {
    for(let i = 1;i <= 10; i++ ) {console.log(`${numero} * ${numero} = ${numero * i}`)}
}
 tabuadaa  (5) 

