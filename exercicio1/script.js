const yourName = (name) => console.log(`Olá, ${name}!`);
yourName('Rodolpho');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const bySix = (array) => array.forEach(num => {
    console.log(num * 6)
})

bySix(array)