const soma = (num1,num2) =>{
    const somaDosNumeros = num1+num2;
    console.log(somaDosNumeros);
}

soma(5,3);

const maiorOuNao = (num1,num2) => {
    let condicao =undefined;
    if(num1 > num2){
        condicao = true;
    }else{
        condicao = false;
    }

    console.log(condicao)
};

maiorOuNao(1,-1);
maiorOuNao(2,4);

const parOuNao = (num1) =>{
    if(num1%2==0){
        console.log("Par")
    }else(
        console.log("Impar")
    )
}

parOuNao(4);
parOuNao(3);

const manipulaString = (palavra) =>{
    console.log("O tamanho da palavra é "+ palavra.length)
    console.log(palavra.toUpperCase())
}

manipulaString("Teste");