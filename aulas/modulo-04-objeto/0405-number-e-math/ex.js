// Retorne um número aleatório entre 1050 e 2000
const aleatorio = (Math.random() * (2000 - 1050 + 1)) + 1050

console.log(aleatorio.toFixed())

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'
let numeros2 = numeros.split(', ')

const maior = Math.max(...numeros2) // esse é o 'spread' um método de array que passa todos os itens do array alvo como argumentos

// Crie uma funlção para limpar os preços e retornar on números dom centavos arredondados, depois retorna a soma total
const listaPrecos = [
    'R$ 95,99', 
    '  R$ 100,222',
    'R$ 230  ',
    'r$ 200'
]

const somar = () => {
    let acum = 0

    listaPrecos.forEach(preco => {
        const limpo = +preco.trim().slice(3).replace(',', '.')
        const arredondado = limpo.toFixed(2)

        acum += +arredondado
    }) 
    console.log('R$ ' + acum)
}

somar()