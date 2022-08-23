function meuNome(nome) {
    console.log(`Olá ${nome}`);
    
}
meuNome('Leonardo')

function tabuadadoDoSeis(array) {
     const novoArray =[]
      for(let i=1; i<=10; i++){
          console.log(`${6}X${i}=${6*i}`);
      }

    // function tabuada(numero) {
    //     const tabuadaNum=[];
    //     for (let i = 1; i <=10; i++) {
    //         console.log(`Tabuada ${numero}x ${i} = ${numero*i}`);
    //     }
    //     return tabuada
    // }
     tabuadadoDoSeis()
}

const tabuadaArrow = () =>{
    for(let i = 0; i<=10; i++)
    console.log(`${6}X${i}=${6*i}`);
}

tabuadaArrow()