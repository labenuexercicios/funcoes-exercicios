//function ex01(nome) {
//    let nome = prompt("Qual o seu nome?");
//    return `Olá, ${nome}!`
//}
//console.log(ex01());

const ex01B = (nome) => {
    nome = prompt("Qual o seu nome?")
    return `Olá, ${nome}!`
}
console.log(ex01B());
console.log(" ");

/*function tabuada(){
    num = prompt("Qual número vc quer visualizar a tabuada?");
    console.log("Tabuada do número", `${num}:`);
    for(let count=1; count<=10 ; count++)
    console.log(num+" x "+count+" = " + (num*count));
    }
tabuada();*/

const tabuada = () => {
    num = prompt("Qual número vc quer visualizar a tabuada?");
    console.log("Tabuada do número", `${num}:`);
    for(let count=1; count<=10 ; count++) 
    console.log(num+" x "+count+" = " + (num*count));
    }
tabuada()

//console.log(num+" x "+count+" = " + (num*count));
//`${num} x ${count} = ${num*count}`  