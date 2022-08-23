function soma(a, b) 
{
    return (Number(prompt("Digite o primeiro número para soma")) + Number(prompt("Digite o segundo número para soma")))
}

console.log(`O resultado da soma é ${soma()}`);



function subtracao(a, b) 
{
    return (Number(prompt("Digite o primeiro número para subtração")) - Number(prompt("Digite o segundo número para subtração")));

}

console.log(`O resultado da sutração é ${subtracao()}`);

function multiplicacao(a, b) 
{
    return(Number(prompt("Digite o primeiro número para multiplicação") * Number(prompt("Digite o segundo número para multiplicação"))))
}

console.log("O resultado da multiplicação é", + multiplicacao());

function divisao(a, b) 
{
    return (Number(prompt("Digite o primeiro número para divisão")) / Number(prompt("Digite o segundo número para divisão")));
}

console.log("O resultado da divisão é", + divisao());