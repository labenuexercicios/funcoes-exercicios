//A

function soma (x,y){
    console.log(x+y)
      
}

soma(4,7)

//B

const maiorOuIgual = (x,y) =>{
    if (x>y){
        console.log(`o numeor ${x} é maior que ${y}`)
    }else{
        console.log(`o numero ${x} é menor que ${y}`)
    }
}

maiorOuIgual(6,5)

//C

const parOuImpar = (x) =>{
    if (x % 2 === 0){
        console.log(`o Numero ${x} é par`)
    }else{
        console.log(`o numero ${x} é impar`)
    }
}

parOuImpar(4)

//D

const mensagem = (palavra)=>{
    console.log(`a mensagem ${palavra.toUpperCase()} tem ${palavra.length} letras`)
    
}

mensagem(prompt(`digite uma mensagem`))

