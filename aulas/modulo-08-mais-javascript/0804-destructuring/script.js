const cliente = {
    nome: 'Kevin',
    compras: {
        digitais:{
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video 1', 'Video 2']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

// const {livros, videos} = cliente.compras.digitais
// nota: vale lembrar que estas são constantes que foram criadas, portanto não podem ser feitas novas variaveis com o mesmo nome

// const {fisicas, digitais, digitais:{livros,videos}} = cliente.compras
const {
    nome: nomeCliente, 
    compras: comprasDoCliente,
    compras:{
        digitais, digitais:{livros,videos},
        fisicas, fisicas:{cadernos, lapis = ['Lapis 1', 'Lapis 2']}
    }
} = cliente

///////////////////////////////////////////////////////////////////////////

// const frutas = ['Banana', 'Uva', 'Morango', ['Laranja', 'Tangerina']]
// const [primeira, segunda, terceira, [quarta, quinta]] = frutas

const [primeira, segunda, ...resto] = ['Banana', 'uva', 'pera', 'nectarina']

// console.log(resto) // ['pera', 'nectarina']

///////////////////////////////////////////////////////////////////////////

function handleKeyboard({key}){
    // console.log(key)
}

document.addEventListener('keyup', handleKeyboard)