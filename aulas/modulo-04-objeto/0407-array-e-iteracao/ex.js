// selecione cada curso e retorne uma array com objetos contendo:
    // titulo, descrição, aulas e horas de cada curso
    const cursos = document.querySelectorAll('.curso')

    const cursosArray = Array.from(cursos) // o map() funciona apenas em Arrays e não em NodeLists, por isso antes o método não era reconhecido como uma função

    const cursosObj = cursosArray.map(curso => {
        // const obj = {
        //     title: curso.querySelector('h1').innerText,
        //     description: curso.querySelector('p').innerText,
        //     classes: curso.querySelector('span.aulas').innerText,
        //     hours: curso.querySelector('span.horas').innerText
        // }
        // return obj // nota: lembrar de retornar o valor desejado para que o resultado não seja uma array cheia de 'undefined'
        const titulo = curso.querySelector('h1').innerText
        const descricao = curso.querySelector('p').innerText
        const aulas = curso.querySelector('span.aulas').innerText
        const horas = curso.querySelector('span.horas').innerText

        return {
            titulo, 
            descricao,
            aulas,
            horas,// no ES6, se a chave de um Objeto tiver o mesmo nome e valor de uma variável, é possível apenas escrever o nome da chavae/variavel que o objeto será criado normalmente, atribuindo aquele vaalor àquela chave
        }
    })
    // console.log(cursosObj)

// retorne uma lista com os numeros maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33]

const maiores100 = numeros.filter(num => num > 100)
// console.log(maiores100)

// verifique se 'Baixo' faz parte da lista de instrumentos e retorne 'true'
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some(instrumento => instrumento === 'Baixo')
// console.log(temBaixo)

// retorna o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]

const precoTotal = compras.reduce((acc, compra) => {
    const precoCompra = +compra.preco.replace('R$ ', '').replace(',', '.')

    return acc + precoCompra
    // note: qualquer linha de código colocada depois de 'return' dentro de uma função é ignorada, parece que o 'return' interrompe o código onde está
}, 0)

// console.log('preço total: R$', precoTotal)