const Parâmetros = slide_2 => {

    // Parâmetros
    // Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido à falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.

    function perimetroForma(lado, totalLados){
        return lado * totalLados
    }

    perimetroForma(10, 4) // 40
    perimetroForma(10) // NaN
}

const Arguments = slide_5 => {

    // Arguments
    // A palavra "arguments" é um objeto Array-like criado dentro da função. Ess eobjeto contém os valores dos argumentos.

    function perimetroForma(lado, totalLados = 4){
        console.log(arguments)
        return lado * totalLados
    }

    perimetroForma(10)
    perimetroForma(10, 4, 20)
}

const Parametro_Rest = slide_6 => {

    // Parâmetro Rest
    // É possível declararmos um parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

    function anunciarGanhadores(...ganhadores){
        ganhadores.forEach(ganhador => {
            console.log(ganhador + ' ganhou.')
        })
    }

    anunciarGanhadores('Pedro', 'Marta', 'Maria')
}

const Único_Rest = slide_7 => {

    // Único Rest
    // Só é possível ter UM parâmetro rest e ele deve ser o último
    
    function anunciarGanhadores(premio, ...ganhadores){
        ganhadores.forEach(ganhador => {
            console.log(ganhador + ' ganhou ' + premio)
        })
    }
    anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria')
}

const Rest_vs_Arguments = slide_8 => {
    
    // Rest vs Arguments
    // Apesar de parecidos o parâmetro "rest" e a palavra "arguments" possuem grandes diferenças. Sendo "rest" uma array real e "arguments" um objeto Array-like.

    function anunciarGanhadores(premio, ...ganhadores){
        console.log(ganhadores) // ganhador 1, ganhador 2...
        // nota: vale lembrar que o "rest" contem penas os argumentos aos quais ele se refere. Neste caso, "premio" não está contido em "rest"

        console.log(arguments) // premio, ganhador 1, ganhador2 ...
    }
    anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria')
}

const Oporador_Spread = slide_9 => {

    // Operador Spread
    // Assim como o rest, o operador Spread também utiliza os "..." para ser ativado. O spread irá substituir um item iterável, um por um.

    const frutas = ['Banana', 'Uva', 'Morango']
    const legumes = ['Cenoura', 'Batata']

    const comidas = [...frutas, 'Pizza', ...legumes]
}

const Spread_Argument = slide_10 => {

    // Spread Argument
    // O "Spread" pode ser muito util para funções que recebem uma lista de argumentos ao invés de uma array.

    const numeroMaximo = Math.max(4,5,20,10,30,2,33,5)

    const listaNumeros = [1,13,21,12,55,2,3,43]
    const numeroMaximoSpread = Math.max(...listaNumeros)
}

// nota: o que aparenta ser a diferença entre o Rest e o Spread é:

// rest: indica o restante, por exemplo, dos argumentos passados em uma função a partir de um determinado ponto. Sendo assim, em uma função para a qual foram passados dois de cinco argumentos, o rest indicaria os tres restantes

// spread: indica uma lista de valores que será espalhada onde o spread está sendo chamado. Portanto, no caso de uma lista armazenada em uma variavel que devesse ser passada, item por item (e nao como lista mesmo) como argumento ou conteudo para uma outra coisa, utiliza-se o Spread com, obrigatoriamente, o nome da variavel que contem o conteudo originalmente.

const Transformar_em_Array = slide_11 => {

    // Transformar em Array
    // É possível transformar itens iteráveis em uma Array real com o spread.

    const btns = document.querySelectorAll('button')
    const btnsArray = [...btns]

    const frase = 'Isso é JavaScript'
    const fraseArray = [...frase]
}