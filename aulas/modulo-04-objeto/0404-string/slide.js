// 2 / 17
    // String
        // É a construtora de strings, toda string possui as propriedades e métodos do prototype de String

        const comida = 'Pizza'
        const liquido = new String('Água')
        const ano = new String(2022)

// 3 / 17
    // str.length
        // Propriedade com o total de caracteres da string

        const frase = 'A melhor comida'

        comida.length // 5
        frase.length // 15

        comida[0] // P
        frase[0] // A
        frase[frase.length - 1] // a

// 4 / 17
    // str.charAt(n)
        // Retorna o caracter de acordo com o index de (n)

        const linguagem = 'Javascript'
        
        linguagem.charAt(0) // J
        linguagem.charAt(2) // v
        linguagem.charAt(linguagem.length -1) // t
    
// 5 / 17
    //str.concat(str2, str3, ...)
        // Concatena as strings e retorna o resultado

        const frase2 = 'A melhor linguagem é '

        const fraseCompleta = frase2.concat(linguagem, '!!')

// 6 / 17
    // str.includes(search, position)
        // Procura pela string exata dentro de outra string. A procura é case sensitive

        const fruta = 'Banana'
        const listaFrutas = 'Melancia, Banana, Laranja'
        
        listaFrutas.includes(fruta) // true
        fruta.includes(listaFrutas) // false

// 7 / 17
    // str.endsWith(search) e str.startsWith(search)
        // Procura pela string exata dentro de outra string. A procura é case sensitive

        fruta.endsWith('nana') // true
        fruta.startsWith('Ba') // true
        fruta.startsWith('na') // false

// 8 / 17
    // str.slice(start, end)
        // Corta a string de acordo com so valores de start e end

        const transacao1 = 'Depósito de cliente'
        const transacao2 = 'Depósito de fornecedor'
        const transacao3 = 'Taxa de camisas'

        transacao1.slice(0, 3) // Dep
        transacao2.slice(0, 3) // Dep
        transacao3.slice(0, 3) // Tax

        transacao1.slice(12) // cliente // pega a partir do caractere de indice 12
        transacao1.slice(-4) // ente // pega os 4 ultimos caracteres
        transacao1.slice(3, 6) // ósi
        
// 9 / 17
    // str.substring(start, end)
        // Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice

        // const linguagem = 'Javascript'
        linguagem.substring(3, 5) // as
        linguagem.substring(0, 4) // Java
        linguagem.substring(4) // Script
        linguagem.substring(-3) // Javascript // simplesmente retorna a string original

// 10 / 17
    // str.indexOf(search) e str.lastIndexOf(search)
        // Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOd ele retorna o último resultado
        
        const instrumento = 'Guitarra'

        instrumento.indexOf('r') // 5
        instrumento.lastIndexOf('r') // 6
        instrumento.indexOf('ta') // 3 // em casos como este, o lastIntexOf() deve retornar o indice seguinte à letra 'a'

// 11 / 17
    // str.padStart(n, str) e str.padEnd(n, str)
        // Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento

        const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 1200']

        // listaPrecos.forEach(preco => console.log(preco.padStart(10, '.')))

        listaPrecos[0].padStart(10, '.') // .....R$ 99
        listaPrecos[0].padEnd(10, '.') // R$ 99.....

// 12 / 17
    // str.repeat(n)
        // Repete a string (n) vezes

        const frase = 'Ta'
        frase.repeat(5) //TaTaTaTaTa

// 13 /17 
    // str.replace(reqexp|substr, rewstr|function)
        // Troca parte da string por outra. Podemos utilizar uma regular exression ou um valor direto. Se usarmos um valor direto ele irá trocar apemas o primeiro valor que encontrar

        let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
        listaItens = listaItens.replace(/[]+/g, ', ')

        let preco = 'R$ 1200,43'
        preco = preco.replace(',', '.') // 'R$ 1200.43

        // Veremos mais sobre regular expressions
    
// 14 / 17
    // str.split(padrao)
        // Divide a string de acordo com o padrão passado e retorna uma array.

        const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
        const arrayItens = listaItens.split(' ')

        const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
        const htmlArray = htmlText.split('div')
        const htmlNovo = htmlArray.join('section')

        // join é um métodos de Array

// 15 / 17 
    // str.toLowerCase() e str.toUpperCase()
        // Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários

        const sexo1 = 'Feminino'
        const sexo2 = 'feminino'
        const sexo3 = 'FEMININO'

        (sexo1.toLocaleLowerCase() === 'feminino') // true
        (sexo2.toLocaleLowerCase() === 'feminino') // true
        (sexo3.toLocaleLowerCase() === 'feminino') // true
    
// 16 / 17
    // str.trim(), str.trimStart(), str.trimEnd()
        // Remove espaço em branco do inicio ou final de uma string

        const valor = '  R$ 23,00  '
        valor.trim() // 'R$ 23,00'
        valor.trimStart() // 'R$ 23,00  '
        valor.trimEnd() // '  R$ 23,00'

        // NÃO REMOVE ESPAÇOS DO MEIO DA STRING

