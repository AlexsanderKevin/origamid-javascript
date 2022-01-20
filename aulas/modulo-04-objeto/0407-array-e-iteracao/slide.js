// [].forEach()
    // [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos:
        // itemAtual (valor do item da array),
        // index (index do valor na array)
        // array (a array original)

    const carros = ['Ford', 'Fiat', 'Honda']
    carros.forEach(function(item, index, array){
        console.log(item.toUpperCase())
    })
    
    // com arrow function 
    carros.forEach((item, index, array) => {
        console.log(item.toUpperCase())
    })

    // O método sempre retorna 'undefined' // isso deve querer dizer que não é possível atribuir o retorno a outra variável

// Arrow Function
    
    const li = document.querySelectorAll('li')

    li.forEach(i => i.classList.add('ativa'))

    li.forEach(function(i){
        i.classList.add('ativa')
    })

// Modificar a Array Original
    // O terceiro argumento do callbakc é uma referência direta e se modificado irá também modificar a array original.

    // const carros = carros ^
    carros.forEach((item, index, array) => {
        array[index] = 'Carro' + item
    })
    
    carros // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

    // É melhor utilizarmos o [].map() para esse tipo de situação

// [].map()
    // [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar 'undefined', retorna uma nova array com valores atualizados de acordo com o return de cada iteração
    const newCarros = carros.map(item => {
        return 'Carro ' + item // o 'return' é o que diferencia o map() do forEach() na prática
    })

    carros // ['Ford', 'Fiat', 'Honda']
    newCarros // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// Valor Retornado
    // Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado, tal como o de qualquer função que não possui 'return', será 'undefined'
    const newCarros2 = carros.map(item => {
        const novoValor = 'Carro ' + item
    })

    newCarros2 // [undefined, undefined, undefined]

// Arrow Function e [].map()
    // Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arow =>
    const numeros = [2, 4, 6, 8, 10, 12, 14]
    const numerosX3 = numeros.map(n => n * 3) // não precisa do 'return'

    numerosX3 // [6, 12, 18, 24, 30, 36, 42]

// map() vs forEach()
    // Se o objetivo for modificar os valores da array atual, sempre utilize o map(), pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novameente sobre estes valores

// map() com Objetos
    // Map  pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto

    const aulas = [
        {
            nome: 'HTML 1',
            min: 15
        },
        {
            nome: 'HTML 2',
            min: 10
        },
        {
            nome: 'CSS 1',
            min: 20
        },
        {
            nome: 'JS 1',
            min: 25
        },
    ]

    const tempoAulas = aulas.map(aula => aula.min) // [15, 10, 20, 25]

// [].reduce() 
    // [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
    // Executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de 'acumulador', mas é na verdade apenas o retorno da iteração anterior.

    const aulasTempo = [10, 25, 30]
    const total1 = aulasTempo.reduce((acumulador, atual)=>{
        return acumulador + atual // o valor do 'acumulador' será sempre o retorno da função anterior
    }) // é importante comentar que caso não seja passado o valo inicial do acumulador, apesar de o retorno ser o mesmo de um reduce() com o valor inicial de 0, a primeira ieração não será executada, a função terá um loop a menos.
    total1 // 65

    const total2 = aulasTempo.reduce((acc, cur) => acc + cur, 100) // 100 é o valor inicial, o que significa que ao inicio do loop a variavel acc (acumulador) terá 100 como valor  // vale comentar que 'cur' deve signifiar 'current' (atual)
    total2 // 165
    
    // Reduce Passo a Passo 1
        // O primeiro aprâmetro do callback é o valor do segundo argumento passado no reduce( callback, inicial) durante a primeira iteração. nAs iterações seguintes este valor passa a ser o retornado pela aterior

        // // 1 
        // aulasTempo.reduce((0, 10) =>{
        //     return 0 + 10
        // }, 0) // retorna 10

        // // 2 
        // aulasTempo.reduce((10, 25) => {
        //     return 10 + 25
        // },0) // retorna 35

        // // 3 
        // aulasTempo.reduce((35, 30) => {
        //     return 35 + 30
        // },0) // retorna 65
    
    // Reduce Passo a Passo 2
        // Se não definirmos o valor inicial do acumulador, ele irá 'pular' a primeira iteração e começará a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração

        // // 1
        // aulasTempo.reduce((10, 25) => {
        //     return 10 + 25
        // },0) // retorna 35

        // // 2 
        // aulasTempo.reduce((35, 30) => {
        //     return 35 + 30
        // },0) // retorna 65

    // Maior Valor com [].reduce

        // dado const numeros = numeros
        const maiorValor = numeros.reduce((anterior, atual) => {
            return anterior < atual ? atual : anterior
        }) 
        maiorValor // maior numero = 14
    
    // Podemos retornar outros valores com reduce()
        // dados 'const aulas = aulas ^'

        const listaAulas = aulas.reduce((acumulador, atual, index) => {
            acumulador[index] = atual.nome
            return acumulador
        }, {}) // nesse caso o acumulador é um objeto que, a cada iteração, adiciona um valor a si mesmo em um indice referente à iteração que está acontecendo // no primeiro loop  é adicionado no indice 1,  so segundo indice 2, ...
    
    // [].reduceRight()
        // Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda (do final para o inicio da array), enquanto o reduce(do inicio ao final da array) itera da esquerda para a direita

        const frutas = ['Banana', 'Pêra', 'Uva']

        const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta)
        const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta)

        frutasRight // Uva Pêra Banana
        frutasLeft // Banana Pêra Uva

// [].some()
        // [].some(), se pelo menos um return da iteração for 'truthy' (verdadeira), ele retorna 'true'
        const temUva = frutas.some((fruta) => { // parece receber os mesmos parametros do forEach() ou map()
            return fruta === 'Uva'
        }) // fruta

        function maiortQue100(numero){
            return numero > 100
        }
        const numeros2 = [0,34,22,88,101,2]
        const temMaior = numeros.some(maiortQue100) // nota: extremamente mais legível

// [].every()
    // [].every(), se todos os returns das iterações forem 'truthy', o método irá retornar 'true'. Se pelo menos um for 'falsy', ele irá retornar 'false'

    // dados 'const frutas = frutas ^'
    const arraysCheias = frutas.every(fruta => fruta) // nesse caso, se pelo menos um dos itens da array for vazio, a função retornará 'false'
    // nota: strings vazias sempre retornam 'false'
    // nota: as iterações param de ser executadas assim que é enconrado um valor 'false' e o método já retorna tal valor imediatamente

    // dados 'const numeros = numeros2 ^
    const maiorQue3 = numeros.every(x => x > 3) // caso todos os numeros sejam maior que 3, o retorno será 'true'

// [].find() e [].findIndex()
    // [].find(), retorna o valor atual da primeira iteração que retornar um valor 'truthy'.
    // [].findIndex(), ao invés de retornar o valor, retorna o indez deste valor na array.

    // dados 'const frutas = frutas ^'
    const buscaUva = frutas.findIndex(fruta => fruta === 'Uva') // 2
    // nota: retorna o indice da primeira iteração com resultado 'true' e interrompe as demais iterações

    // dados numeros = numeros2 ^'
    const burcaMaior45 = numeros2.find(x => x > 45) // 88 // retorna o primeiro numero maior que 45
    // nota: retorna o valor contido no primeiro slot que corresponda à exigencia do método e interrompe as demais iterações

// [].filter()
        // [].filter() retorna uma array com a lista de valores que, durante a sua iteração, retornam um valor 'truthy'
        
        const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']
        const arrayLimpa = frutas.filter((fruta) => {
            return fruta // caso aqui esteja escrito 'return true', a array será identica à oriinal, uma cópia
        }) // ['Banana', 'Uva', 'Maçã'] // retira dodos os espaços vazios e retorna apenas os espaços preenchido

        const numeros3 = [6,43,22,88,101,29]
        const burcaMaior45_2 = numeros3.filter( x => x > 45) // [88, 101]
        // nota: diferentemente dos outros métodos, esse aqui não é interrompido com uma condição 'false' ou 'true', ele apenas ignora as 'false' e retorna as 'true'

        // filter() em objetos
            // dados: 'const aulas = aulas2 ^'
            const maiores15 = aulas.filter((aula) => {
                return aula.min > 15
            })