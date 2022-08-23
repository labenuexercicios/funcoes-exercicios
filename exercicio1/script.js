
// A
//******************************************************************************* *//

// function frase(nome) {

//     console.log(`Ola ${nome}`)
// }

// //Usabndo o function arrow
// const frase = (nome) => {console.log(`Ola ${nome}`)}

// frase("Nick")

//  B
//******************************************************************************* *//
//TABUADA

// function tabuada(num) {
    
//     for(let i = 1; i<=10; i++){
//         let mult = num * i
//         const string = `${num} X ${i} = ${mult}` 
        
//         console.log(string)
//     }
   
       
// }

// tabuada(6)


//  C
//******************************************************************************* *//
// Usabndo o function arrow

// const tabuada = (num) => { for(i = 1; i<= 10; i++) {
//     let mult = num * i
//     console.log(`${num} X ${i} = ${mult}`)
// }
// }
// tabuada(5)

//Usando Empressão de função

const tabuada = function (num) { for(i = 1; i<= 10; i++) {
    let mult = num * i
    console.log(`${num} X ${i} = ${mult}`)
}
}
tabuada(5)