/*function imprimirNome(){
    let nome=prompt("Qual o seu nome?")
    console.log("Olá, "+nome+"!");
}*/

let nome=prompt("Qual o seu nome?");

let imprimirNome = (nomePraImprimir) => {
    console.log("Olá, " + nomePraImprimir + "!");
}

/*function tabuadaDoSeis(){
    console.log("6 12 18 24 30 36 42 48 54 60");
}*/

let arrayTabuada=[6,12,18,24,30,36,42,48,54,60]

let tabuadaDoSeis = function(tabuada){
    console.log(tabuada)
}

imprimirNome(nome);
tabuadaDoSeis(arrayTabuada);