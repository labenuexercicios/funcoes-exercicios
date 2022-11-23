function firstprint() { // teste funcao string
    console.log("Olá meu nobre.")
}


firstprint()

function tabuadadonumero(x) { // funcao para a tabula com 1 numero especifico
    console.log("A tabuada de ${x} é:")
    let resposta
    for (let i = 1; i <= 10; i++) {
        resposta = x * i
        console.log(resposta)
    }
}
numeropratabuada = prompt("Digite o valor do número desejado")

tabuadadonumero(numeropratabuada)

let seqnumber = 1
for (seqnumber = 2; seqnumber < 5; seqnumber++) {//chama da funcao para varios numeros
    tabuadadonumero(seqnumber)
}


const firstprintarrow = () => console.log("Fala meu patrão") //teste arrow com string

firstprintarrow()

const tabuadadonumeroarrow = (x) => {//teste arrow tabuada
    let resposta2 
    for (let i = 1; i <= 10; i++){ 
        resposta2 = x * i 
        console.log(resposta2)}}

numeropratabuada2 = Number(prompt("Digite 1 número pra funcao arrow"))
tabuadadonumeroarrow(numeropratabuada2)
