const iterable = slide_2 => {

    // Iterable
    // São objetos que possuem método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.

    const frutas = ['Banana', 'Morango', 'Uva']
    const frase = 'Isso é JavaScript'

    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(({headers}) => console.log(headers))
}

const for_of = slide_3 => {

    // for...of 
    // É possível fazermos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.

    const frutas = ['Banana', 'Morango', 'Uva']
    const frase = 'Isso é JavaScript'

    for(const fruta of frutas){
        console.log(fruta)
    }

    for(const char of frase){
        console.log(char)
    }
}

const Spread_e_for_of = slide_4 => {

    // Spread e for...of
    // Com o for loop podemos manipular cada um dos elementos do objeto iteravel.

    const buttons = document.querySelectorAll('button')

    for(const btn of buttons){
        btn.style.background = 'blue'
    }
    console.log(...buttons)
}

const Apeas_Iteraveis = slide_5 => {

    // Apenas Iteráveis
    // O for..of não irá funcionar em um objeto comum que não seja iterável.

    const carro = {
        marca: 'Honda',
        ano: 2018
    }

    // Erro, não é iterável
    for(const propriedades of carro){
        console.log(propriedades)
    }
}

const for_in = slide_6 => {

    // for...in
    // Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

    const carro = {
        marca: 'honda',
        ano: 2018
    }

    for(const propriedade in carro){
        console.log(propriedade) // nota: retorna apenas as chaves.
    }
}

const Arrays_e_for_in = slide_7 => {

    // Arrays e for...in
    // Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.

    const frutas = ['Banana', 'Morango', 'Uva']

    for(const index in frutas){
        console.log(index)
    }
    for(const index in frutas){
        console.log(frutas[index])
    }
}

const Chave_e_Valor = slide_8 => {

    // Chave e Valor 
    // Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.

    const btn = document.querySelector('button')
    const btnStyles = getComputedStyle(btn)

    for(const style in btnStyles){
        console.log(`${style}: ${btnStyles[style]}`)
    }
}

const Do_while = slide_9 => {

    // Do / While
    // Outro tipo de loop é o Do / While. Não é muito utilizado.

    let i = 0
    do {
        console.log(i++)
    } while (i <= 5)
}