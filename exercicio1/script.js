function a(x)
{
    console,le.log(`Olá, ${(x)}`);
}

a('Marcelo');

let i = 1;
function b(c)
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(`${(c)} x ${i} = ${Number(c)*Number(i)}`)
    }
}

b(6);

const a =(x) =>
{
    console.log(`Olá (a)`)
}

const b = (c) =>
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(`${(c)} x ${i} = ${Number(c)*Number(i)}`)
    }
}
console.log(b(6));
