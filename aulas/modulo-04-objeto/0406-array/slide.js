// Arrays
    // Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais

    const instrumentos = ['Guitarra', 'Baixo', 'Violão']
    const precos = [49, 99, 69, 89]

    const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Amarelo'}]]
    // quanto mais tipos diferentes de dados estiverem na array, mais lentas serão as operações envolvendo-as

    dados[2]('Ford')
    dados[1][2].cor // azul

// Construção de Arrays
    // Toda array herda os métodos e propriedades do protótipo do construtos Array

    const instrumentos = ['Guitarra', 'Baixo', 'Violão']
    const carros = new Array('Corola', 'Mustang', 'Honda')

    carros[1] // Mustang
    carros[2] = 'Ferrari'
    carros[10] = 'Parati' // isso cria espaços vazios entre o ultimo item da lista e o item de indice 10, que está sendo criado
    carros.length // 11 // isso demonstra que, mesmo havendo 4 espaços ocupados na Array, os espaços vazios ainda existem entre o indice 2 e 10

    // Os valores das array's não são estáticos

// Array.from()
    // Array.from() é um dos métodos utilizados para transformar array-like objects em uma array

    let li = document.querySelectorAll('li') // NodeList
    li = Array.from(li) // Array

    const carros2 = {
        0: 'Fiat',
        1: 'Honda',
        2: 'Ford',
        length: 4 // só é possível transformar objetos como este em Array caso possua a propriedade 'length'
    } // objeto

    const carros2Array = Array.from(carros2)

//Array.isArray()
    // Verifica se o valor passado é uma array e retorna um valor booleano

    let li2 = document.querySelectorAll('li')
    Array.isArray(li2) // false

    li2 = Array.from(li2) // Array
    Array.isArray(li2) // true

// Array.of(), Array() e new Array()
    // Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array

    Array.of(10) // [10]
    Array.of(1, 2, 3, 4) // [1,2,3,4]
    new Array(5) // [,,,,] // o argumento indica o 'length' da array, aparentemente
    Array(5) // [,,,,] // aparentemente funciona tal como o método acima
    Array(1,2,3,4) // [1,2,3,4] // curiosamente apenas transforma os argumentos nos valores contidos numa array, ignoranto o 'length'

// Propriedades e Métodos do Prototype
    // [].length retorna o tamanho da array

    const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']]

    frutas.length // 3
    frutas[0].length // 6 // o tamanho da string armazenada
    frutas[1].length // 5 // o mesmo que o de cima
    frutas[2].length // 2 // o tamanho da array contida no indice '2'

// Métodos Modificadores [].sort()
    // Os próximos métodos que vamos falar sobre são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza-a pelo unicode.

    const instrumentos2 = ['Guitarra', 'Baixo', 'Violão']
    instrumentos2.sort()
    instrumentos2 // ['Baixo', 'Guitarra', 'Violão'] // ordem alfabética

    const idades = [32,21,33,43,1,12,8]
    idades.sort()
    idades // [1,12,21,32,33,43,8] // não chega a ser uma ordem crescente, tá mais para uma ordem alfabética aplicada aos números, onde o primeiro número apenas, é levado em consideração, exceto em casos de números repetidos
    // talvez seja o 'unicode'

// [].unshift() e [].push
    // [].unshift() adiciona elementos ao início da array e retorna o length da mesma.
    // [].push() adiciona elementos ao final da array e retorna o length da mesma

    const carros3 = ['Ford', 'Fiat', 'VW']
    carros3.unshift('Honda', 'Kia') // 5
    carros3 // ['Honda','Kia','Ford', 'Fiat', 'VW']

    carros3.push('Ferrari') // 6
    carros3 // ['Honda','Kia','Ford', 'Fiat', 'VW', 'Ferrari']

// [].shift() e [].pop()
    // [].shift() remove o primeiro elemento da array e retorna o item removido.
    // [].pop() remove o último elemento da array e retorna o item removido.

    const carros4 = ['Ford', 'Fiat', 'VW', 'Honda']
    const primeiroCarro = carros4.shift() // 'Ford'
    carros4 //['Fiat', 'VW', 'Honda']

    const ultimoCarro = carros4.pop() // 'Honda'
    carros4 // ['Fiat', 'VW']

// [].reverse()
    // [].reverse() inverte os itens da array e retorna a nova array

    const carros5 = ['Ford', 'Fiat', 'VW', 'Honda']
    carros5.reverse() // ['Honda', 'VW', 'Fiat', 'Ford']