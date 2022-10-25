//A
const soma = (num1, num2) => {
    resultado = num1 + num2;
    return resultado;
}

console.log(soma(5, 5));
console.log(soma(10, 5));
console.log(soma(15, 5));

//B
const maiorMenor = (num1, num2) => {
    resultado = num1 >= num2;
    return resultado;
}

console.log(maiorMenor(4, 5));

//C
const parOuImpar = (numero) =>{
    const resultado = numero % 2 === 0;
    return resultado;
} 

console.log(parOuImpar(2))


//D
const salario = (salario) => {
    const resultado = salario - (0.1 * salario);  
    return resultado;
}

console.log(salario(2070));





