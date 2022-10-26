function nome () {
    console.log("Ola, Gabriela!")
}
function tabuada () {
    const num1 = 1*6
    const num2 = 2*6
    const num3 = 3*6
    const num4 = 4*6
    const num5 = 5*6
    const num6 = 6*6
    const num7 = 7*6
    const num8 = 8*6
    const num9 = 9*6
    const num10 = 10*6
    return `Tabuada:
        1 * 6: ${num1}
        2 * 6: ${num2}
        3 * 6: ${num3}
        4 * 6: ${num4}
        5 * 6: ${num5}
        6 * 6: ${num6}
        7 * 6: ${num7}
        8 * 6: ${num8}
        9 * 6: ${num9}
        10 * 6: ${num10}`
}

nome ()
console.log(tabuada())

//arrow function
const name = () => "Ola, Gabriela"

const tabu = () => {
    const num1 = 1*6
    const num2 = 2*6
    const num3 = 3*6
    const num4 = 4*6
    const num5 = 5*6
    const num6 = 6*6
    const num7 = 7*6
    const num8 = 8*6
    const num9 = 9*6
    const num10 = 10*6
    return `Tabuada:
        1 * 6: ${num1}
        2 * 6: ${num2}
        3 * 6: ${num3}
        4 * 6: ${num4}
        5 * 6: ${num5}
        6 * 6: ${num6}
        7 * 6: ${num7}
        8 * 6: ${num8}
        9 * 6: ${num9}
        10 * 6: ${num10}`
}
console.log(tabu())
console.log(name())