// Remova o erro

const priceNumber = n => +n.replace('R$ ', '').replace(',','.') // resposta
const test_1 = priceNumber('R$ 99,99')
console.log(test_1)
console.log('________________________________')
// const priceNumber = n => +n.replace('R$ ', '').replace(',','.')

// Crie uma IIFE e isole o escopo de qualquer código JS
const jogo = 'Megaman';

(()=>{
    const jogo = 'Mario'
    console.log(jogo) // Mario
})()

console.log(jogo) // Megaman
console.log('________________________________')

// Como podemos utilizar a função abaixo?
const active = callback => callback()

function logarOi(nome){
    console.log('Oi ' + nome)
}

function logarOi2(){
    console.log('Oi')
}

active(()=>{logarOi('Fulano')}) // metodos com parametros devem, ao serem chamadas em callback, estar dentro de outra função anonima
active(logarOi2) // o callback pede a função não executada, apenas o nome escrito