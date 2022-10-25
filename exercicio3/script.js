function Sum(n1, n2) {
    const soma = `${n1} + ${n2} = ${n1 + n2}`
    const subs = `${n1} - ${n2} = ${n1 - n2}`
    const mult = `${n1} x ${n2} = ${n1 * n2}`
    const div = `${n1} / ${n2} = ${n1 / n2}`

    return `Você escolheu os números ${n1} e ${n2}. Sua SOMA é ${soma}, sua SUBTRAÇÃO é ${subs}, sua MULTIPLICAÇÃO é ${mult} e sua DIVISÃO é ${div}`
}
console.log(Sum(Number(prompt('Escolha um número para fazer as operações: ')), Number(prompt('Escolha o outro:'))))