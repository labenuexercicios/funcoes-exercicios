/**a) Declare una función que imprima ¡Hola, [SU NOMBRE]!. Llame a esta función. */

function practicaNome (nome){
    console.log(`Ola ${nome} `)
}

practicaNome('Rocio'); 


/**--------------------------- */
/**b) Declara una función que toma un número como parámetro e imprime su 
 * tabla en la consola. 
 * Llame a esta función varias veces con diferentes números. */

let nUser = +(prompt("inserir un numero"));


function tabuada (nUser){
    for (let i = 0; i <= 10 ;i++){
        console.log(nUser * i)
    }
}


/*-----------------------------*/

/**c) Comente las funciones creadas anteriormente y reescríbalas usando expresiones
 *  de función o funciones de flecha */

/*
const practicaNomeArrow = (Nome) => { 
    console.log(`Ola ${Nome} `)
}

practicaNomeArrow('Rocio'); 


let nUsers = +(prompt("inserir un numero"));

let tabuadas = (nUsers) => {
    for (let i = 0; i <= 10 ;i++){
        console.log(nUsers * i)
    }    
}
    
console.log(tabuadas(nUsers));
*/


/**----------------------------------------------------- */
