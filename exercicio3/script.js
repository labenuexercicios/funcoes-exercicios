// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de 
// uma das operações básicas (soma, subtração, multiplicação e divisão).
const fazerSoma = (numero1, numero2)=>{
        return numero1 + numero2
};
 


const fazerSubtracao = (numero1, numero2)=>{
    return numero1 - numero2;
};



const fazerMultiplicacao = (numero1, numero2)=>{
    return numero1 * numero2
};



const fazerDivisao = (numero1,numero2)=>{
    return numero1 / numero2
};


// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
let numero1 =Number(prompt('Digite um número'));
let numero2 =Number(prompt('Digite outro número'));
console.log('Número escolhido:', numero1, numero2);

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
console.log(fazerSoma(numero1,numero2));
console.log(fazerSubtracao(numero1,numero2));
console.log(fazerMultiplicacao(numero1, numero2));
console.log(fazerDivisao(numero1, numero2));
// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das 
// operações no console.
let resultadoSoma = fazerSoma(numero1, numero2);
console.log(resultadoSoma);
let resultadoSubtracao = fazerSubtracao(numero1, numero2);
console.log(resultadoSubtracao);
let resultadoMultiplicacao = fazerMultiplicacao(numero1, numero2);
console.log(resultadoMultiplicacao);
let resultadoDivisao = fazerDivisao(numero1, numero2);
console.log(resultadoDivisao);


