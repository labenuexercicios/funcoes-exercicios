const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(2,4)) //6

const comp = function(n1, n2){
    return n1 > n2;
}

console.log(comp(6,9)) //FALSE

function pair(numb){
    if(numb % 2 == 0){
        return 'É par!'
    }else{
        'Não é ímpar'
    }
}

console.log(pair(22)) //É PAR!
