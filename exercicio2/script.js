// a)
var soma = (num1,num2) => console.log(soma = num1+num2)

soma(5,5)


// b)
var boolean = (num1,num2) => result = (num1 >= num2)

console.log(boolean(3,5))


// c)
var ePar = (num) => (num % 2 == 0) ? console.log('É par') : console.log('É ímpar');

ePar(7)


// d)
var msg = (string) => console.log(`comprimento: ${string.length}, `,`maiúsculo: ${string.toUpperCase()}`)

msg('Diogo')