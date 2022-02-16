const Destructuring = slide_2 => {

    // Destructuring
    // Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.

    const carro = {
        marca: 'Fiat',
        ano: 2018,
        portas: 4
    }

    const {marca, ano} = carro

    console.log(marca) // Fiat
    console.log(ano) // 2018
}

const Destructuring_Objects = slide_3 => {

    // Destructuring Objects
    // A desestruturação irá facilitar a manipulação de dados.
    // Principalmente quando temos uma grande profundidade de objetos.

    const cliente = {
        nome: 'Andre',
        compras: {
            digitais: {
                livros: ['Livro 1', 'Livro 2'],
                videos: ['Video 1', 'Video 2']
            },
            fisicas: {
                cadernos: ['Caderno 1']
            }
        }
    }

    console.log(cliente.compras.digitais.livros)
    console.log(cliente.compras.digitais.videos)

    const {livros, videos} = cliente.compras.digitais
    
    console.log(livros)
    console.log(videos)
}

const Nesting = slide_4 => {

    // Nesting
    // É possível aninhar uma desestruturação dentro de outra.

    const cliente = {
        nome: 'Andre',
        compras: {
            digitais: {
                livros: ['Livro 1', 'Livro 2'],
                videos: ['Video JS', 'Video HTML']
            },
            fisicas:{
                cadernos: ['Caderno 1']
            }
        }
    }

    const {fisicas, digitais, digitais:{livros, videos}} = cliente.compras
    console.log(fisicas)
}

const Nome_das_Variáveis = slide_5 => {

    // Nome das Variáveis
    // É necessário indica o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

    const cliente = {
        nome: 'André',
        compras: 10
    }
    const {nome, compras} = cliente
    // ou
    const {nome: nomeCliente, compras: comprasCliente} = cliente
}

const Valor_Inicial = slide_6 => {

    // Valor Inicial
    // Caso a propriedade não exista o valor padrão dela será "undefined". É possível modificar este valor no momento da desestruturação.

    const cliente = {
        nome: 'Andre',
        compras: 10
    }

    const {nome, compras, email = 'email@gmail.com', cpf} = cliente
    console.log(email) // email@gmail.com
    console.log(cpf) // undefined
}

const Destructuring_Array = slide_7 => {

    // Destructuring Arrays
    // Para desestruturar arrays deve-se colocar as variáveis entre "[]" colchetes.

    const frutas = ['Banana', 'Uva', 'Morango']

    const primeiraFruta = frutas[0]
    const segundaFruta = frutas[1]

    // Com destructuring
    const [primeira, segunda, terceira] = frutas
    // nota: uma vez que arrays não possuem chaves definidas, para nomea-las basta escrever os nomes na ordem correta.
}

const Declaração_de_Variáveis = slide_8 => {

    // Declaração de Variáveis
    // A desestruturação pode servir para declararmos uma sequencia de variáveis.

    const primeiro = 'item 1'
    const segundo = 'item 2'

    // ou
    const [primeiro, segundo, tercero] = ['item 1', 'item 2', 'item3']    
}

const Argumento_Desestruturado = slide_9 => {

    // Argumento Desestruturado
    // Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

    function handleKeyboard(event){
        console.log(event.key)
    }
    // Com Destructuring
    function handleKeyboard({key}){
        console.log(key)
    }

    document.addEventListener('keyup', handleKeyboard)
}