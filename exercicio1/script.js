


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 



// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function handleName(nome){
   console.log(`Ola, ${nome}`)
}

handleName('Everton')


// b) Declare uma função que imprima a tabuada do 6. Chame esta função.


const handleTabuada = (numero) => {
    for (let i=1; i<=10; i++){
       console.log(`${numero} x ${i}= ${numero*i}`)
    }
}

handleTabuada(5)