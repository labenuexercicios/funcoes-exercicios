const parametro1 =Number (prompt ("Por favor digite um numero de 1 a 999"))
const parametro2 =Number (prompt ("Por favor digite outro numero de 1 a 999"))

function somando (parametro1, parametro2){
    console.log("A soma dos dois numeros é:", (parametro1 + parametro2))
}
function bool (parametro1, parametro2){
    console.log("O primeiro número é maior ou igual o segundo número:", (parametro1 >= parametro2))
}

//Na paridade optei por usar a soma dos dois numeros como parametro da função

function paridade (parametro1, parametro2){
    paridade = ((parametro1 + parametro2) & 2)
      console.log("A soma dos dois numeros é par:", (paridade === 0))
}


//Na função para calcular o salario, após o desconto, usarei como parametro a soma dos 
// dois numeros, usados para as questões acima, multiplicado por 200.

function salarioLiquido (parametro1, parametro2){
    salarioLiquido = (((parametro1, parametro2) * 200) * 0.9)
      console.log("O salario com o INSS descontadó ficará em:", salarioLiquido)
}


// Invocando as funções
somando(parametro1, parametro2)
bool(parametro1,parametro2)
paridade(parametro1)
salarioLiquido(parametro1, parametro2)