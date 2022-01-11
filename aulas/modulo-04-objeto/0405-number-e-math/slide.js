// 2 / 11
    // Number
        //É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos

        const ano = 2018
        const preco = new Number(99)

// 3 / 11
    // Number.isNaN() e Number.isInteger()
        // isNaN() é um método de Number, ou seja, não faz parte do protótipo. isInteger() verifica se é um número integral

        Number.isNaN(NaN) // true
        Number.isNaN(4 + 5) // false

        Number.isInteger(20) // true
        Number.isInteger(23.6) // false

// 4 / 11
    // Number.parseFloat() e Number.parseInt()
        // parseFloat() serve para retornarmos um número a partir de uma string. A string deve começar com um número. parseInt recebe, também, um segundo parametro que é o Tadix, 10 é para decimal

        parseFloat('99.50') // mesma função sem o Number
        Number.parseFloat('99.50') // 99.5
        Number.parseFloat('100 reais') // 100
        Number.parseFloat('R$ 100') // NaN

        parseInt('99.05', 10) // 99
        parseInt(5.433434343555, 10) // 5
        Number.parseInt('100 Reais', 10) // 100 // o parse consegue ignorar apenas os espaços e caracteres NaN que venham depois do número, se vier antes um NaN é retornado

        // Float possui decimal, Integer não

// 5 / 11
    // n.toFixed(decimais) // estes já são métodos do protótipo
        // Arredonda o número com base no total de casas decimais do argumento

        const preco = 2.99
        preco.toFixed() // 3 -> arredondado pra cima

        const carro = 100.455
        carro.toFixed(2) // 1000.46

        const preco2 = 1499.49
        preco2.toFixed() // 1499 -> arredondado pra baixo

// 6 / 11
    // n.toString(radix)
        // Transforma o número em uma string com base no Radix. Usa o 10 para o sistema decimal

        const preco3 = 2.99
        preco3.toString(10) // '2.99'

// 7 / 11
    // n.toLocaleString(lang, options)
        // Formata o número de acordo com a língua e opções passadas

        const preco4 = 59.49
        preco.toLocaleString('en-Us', {style: 'currency', currency: 'USD'}) // $59.49
        preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // R$ 59,49

// 8 / 11 
    // Math 
        // É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns

        Math.PI // 3.14159
        Math.E // 2.718
        Math.LN10 // 2.303

// 9 / 11
    // Math.abs(), Math.ceil(), Math.floor() e Math.ound()
        // abs() retorna o valor absoluto, ou seja, transforma negativo em positivo
        // ceil() arredonda para cima, retornando sempre uma integral e floor para baixo
        // round() arredonda para o número integral mais próximo

        Math.abs(-5.5) // 5.5
        Math.ceil(4.8334) // 5
        Math.ceil(4.3) // 5
        Math.floor(4.8334) // 4
        Math.floor(4.3) // 4
        Math.round(4.83334) // 5
        Math.round(4.3) // 4

// 10 / 11
    // Math.max(), Math.min() e Math.random()
        // max() retorna o maior número de uma lista de argumentos
        // min() retorna o menor número de uma lista de argumentos 
        // random() retorna um número aleatório entre 0 e 1

        Math.max( 5, 3, 10, 42, 2) // 42
        Math.min( 5, 3, 10, 42, 2) // 2

        Math.random() // 0.XXX
        Math.floor(Math.random() * 100) // entre 0 e 100 
        Math.floor(Math.random() * 500) // entre 0 e 500 

        // Número random entre 72 w 32
        Math.floor(Math.random() * (72 -32 +1)) + 32
        Math.floor(Math.random() * (min - max + 1)) + 32