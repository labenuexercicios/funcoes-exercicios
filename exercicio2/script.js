function soma(n1,n2){
    return n1+n2;
}

console.log(soma(5,6));//imprime 11

function booleano(n1,n2){
    return n1>=n2;
}

console.log(booleano(5,6));//imprime false

function parOrNo(n1){
    return n1%2 ===0;
}

console.log("É par?",parOrNo(5));//imprime true se for par




function salario(sal){
    let resulta= sal-(sal*0.10)
    return resulta;
}

console.log("O salário liquido é:",salario(1400));//imprime salário menos INSS


