/*   function seunome(parametro){
    console.log(`Olá ${parametro}`)
}  
 
seunome('Emerson Costa')   */

// tabuada do 6

/* function tabuada(numero){
    for(let i=1;i<=10;i++){
        console.log(`${numero}x${i} = ${numero*i}`)
    }
}
tabuada(6) */

let yourname = (nome)=>{
    console.log(`Olá ${nome}`)
}

// chama o nome em arrow function
yourname('Emerson Costa -> Arrow function') 


let calculo =(num) =>{
    for (let j=1;j<=10;j++){
        console.log(`${num}*${j} => ${num*j}`)
    }
}

calculo(Number(prompt('digite um numero'))) /// chama a arrow function para qualquer numero
