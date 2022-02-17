const frutas = ['Banana', 'Morango', 'Uva']
const frase = 'Isso é JavaScript'

fetch('https://pokeapi.co/api/v2/pokemon')
// .then(({headers}) => console.log(headers))

for(const fruta of frutas){
    console.log(fruta)
}
// for(const char of frase){
//     console.log(char)
// }
const buttons = document.querySelectorAll('button')
for(const button of buttons){
    button.style.color = 'green'
}

const carro = {
    marca: 'Honda',
    ano: 2022
}

// for(const prop in carro){
//     console.log(carro[prop]) // ntoa: retorna os valores contidos.
// }

for(const index in frutas){
    console.log(frutas[index])
}

const btnStyles = getComputedStyle(buttons[0])
for(const style in btnStyles){
    // console.log(`${style}: ${btnStyles[style]}`)
}