const frase = 'JavaScript'
const fraseNova = frase.replace(/a/, 'b')

let regexp = /Java/

regexp = /a/g

regexp = /a/ig // nota: a ordem não parece importar

regexp = /[ai]/gi

console.log(
    frase.replace(regexp, 'e')
)

