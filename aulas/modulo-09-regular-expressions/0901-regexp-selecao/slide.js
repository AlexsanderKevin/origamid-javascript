const Regular_Expression = slide_3 => {

    // Regular Expression
    // Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

    // Procura: a
    const padraoRegexp = /J/ // Seleciona o PRIMEIRO 'a'

    const texto = 'JavaScript'
    const novoTexto = texto.replace(padraoRegexp, 'B')
    // BavaScript

    // Praticamente todas as linguagens possuem uma implementação de regexp
}

const Literal = slide_4 => {

    // Literal
    // Utilizar um caracter literal realizará uma busca específica desse caracter.

    // Procura: "J" seguido de "a", "v" e "a"
    const regexp = /Java/
     'JavaScript'.replace(regexp, 'Type')
     // TypeScript
}

const Flag_g = slide_5 => {

    // Flag: g
    // As flags modificarão a maneira como a expressão será interpretada. Uma das mais utilizadas é a "g", que significa "global", ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro.A flag deve ser colocada no final da expressão.

    // Procura: todo "a"
    const regexp = /a/g

    'JavaScript'.replace(regexp, 'i')
    // JiviScript
}

const flag_i = slide_6 => {

    // Flag: i
    // Com o "i" informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ buscará por "a" e "A"

    // Procura: Todo PE, Pe, pE e pe
    const regexp = /Pe/gi

    'Perdeu perdido'.replace(regexp, 'Ba')
    // Bardeu Bardido
}

const Character_Class = slide_7 => {

    // Character Class
    // Se colocarmos os caracteres entre colchetes, estamos definindo uma classe: /[ab]/ procuraá por "a" ou por "b"

    // Procura: TOdo a, A, i I
    const regexp = /[ai]/gi

    'JavaScript'.replace(regexp, 'u')
    // Juvuscrupt
}

const Character_Class_e_Especiais = slide_8 => {

    // Character Class e Especiais
    // Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

    // Procura: - ou .
    const regexp = /[-.]/g

    '111.222-333-44'.replace(regexp, '')
    // 11122233344
}

const Um_ou_Outro = slide_9 => {

    // Um ou Outro
    // Combine caracteres literais com uma classe para buscarmos variações? 'Ju[nl]ho busca "julho" ou "Junho".

    // Procura: "B", seguido de "r", "a" seguido de "s" ou "z", deguido de "i", "l"
    const regexp = /Bra[sz]il/g

    'Brasil é com z: Brazil'.replace(regexp, 'Prazer')
    // Prazer é com z: prazer
}

const De_A_à_Z = slide_10 => {

    // De A à Z
    // O traço "-" dentro de [] pode servir para definirmos um alcance (intervalo). [A-Z] buscará os caracteres de "A" à "Z". [0-9] busca de 0 à 9. A tablea UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

    // Busca por itens de a à z
    const regexp = /[a-z]/g

    'JavaScript é a linguagem'.replace(regexp, '0')
    // J000S0000 é 0 00000000.

    // Busca por itens de "a" à "z" e "A" à "Z"
    const regexp = /[a-zA-Z]/g

    'JavaScript é a linguagem'.replace(regexp, '1')
    // 11111111 é 111111111

    // Busca números de 0 à 9
    const regexpNumero = /[0-9]/g

    '123.333.333-33'.replace(regexpNumero, 'X')
    // XXX.XXX.XXX-XX
}

const Negar = slide_11 => {

    // Negar
    // Utilizando o acento circunflexo podemos negar caracteristicas. Ou seja, pegue tudo o que não seja [^a]

    const regexp = /[^a-z]/g

    'Brasli é com z: Brazil'.replace(regexp, '')
    //  rasil   com z   razil
}

const Ponto = slide_12 => {

    // Ponto 
    // O ponto . irá selecionar qualquer caracter, menos quebras de linha.

    // Procura: todos os caracteres, menos quebra de linha
    const regexp = /./g

    'JavaScript é a linguagem.'.replace(regexp, '0')
    // 0000000000000000000000000
}

const Escapar_Especiais = slide_13 => {

    // Escapar Especiais
    // Caracteres especiais como o ponto "." podem ser escapados utilizando a barra invertida \. Assim este não terá mais a função especial e será tratado como literal. Lista de caracteres especiais:
    // + * ? ^ $ \ . [] {} () | /

    // Procura: todos so pontos
    const regexp = /\./g
    const regexpAlternativa = /[.]/g

    '999.222.222.11'.replace(regexp, '-')
    // 999-222-222-11
}

const Word = slide_14 => {

    // Word
    // O \w irá selecionar qualquer caracter alfanumérico e o underline.
    // É a mesma coisa que [A-Za-z0-9_].

    // Procura: todos os alfanuméricos
    const regexp = /\w/g

    'Guarda-chuva R$ 23,00.'.replace(regexp, '-')
    // ------------- -$ --,--.
}

const Not_Word = slide_15 => {

    // Not Word
    // O \W selecionará tudo o que não for caracter alfanumérico e o underline. É a mesma coisaque [^A-Za-z0-9_]

    const regexp = /\W/g

    'Guarda-chuva R$ 23,00'.replace(regexp, '-')
    // Guarda-chuva-R--23-00-
}

const Digit = slide_16 => {

    // Digit 
    // O \d selecionará qualquer digito. É a mesma coisa que [0-9]

    const regexp = /\d/g

    '+55 (21) 2222-2222'.replace(regexp, 'X')
    // +XX (XX) XXXX-XXXX
}

const Not_Digit = slide_17 => {

    // Not Digit 
    // O \D irá selecionar tudo que não for digito. É a mesma coisa que [^0-9].

    // Procura: o que não for dígito
    const regexp = /\D/g

    '+55 (21) 2222-2222'.replace(regexp, '')
    // 552122222222
}

const Whitespace = slide_18 => {

    // Whitespace
    // O \s selecionará qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.

    // Procura: espaços em branco
    const regexp = /\s/g

    '+55 (21) 2222-  2222 '.replace(regexp, '')
    //+55(21)2222-2222
}

const Not_Whitespace = slide_19 => {

    // Not Whitespace
    // O \S selecionará qualquer caracter que não for espaço em branco.

    // Procura: o que não for espaço em branco
    const regexp = /\S/g

    '+55 (21) 2222- 2222  '.replace(regexp, 'X')
    // XXX XXXX XXXXX  XXXX

    // /[\s\S]/g  selecionará tudio.
}

const Quantificador = slide_20 => {

    // Quantificador 
    // É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas "bbb". Com as chaves podemos indicar a repetição /b{3}/g. Agora será  feita uma seleção completa e não caracter por caracter.

    // Procura: 4 "a" seguidos
    const regexp = /aaaa/g
    const regexpAlt = /a{4}/g

    'Vaaaai ali por favor.'.replace(regexp, 'a')
    // Vai ali por favor.
}

const Quantificador_Min_e_Max = slide_12 => {

    // Quantificador Min e Max
    // Podemos infirmar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer "a" de duas até quatro vezes.
    // /a{2,}/ seleciona quando se repetir duas ou mais vezes

    // Procura: digitos seguidos de 2 a 3
    const regexp = /\d{2,3}/g

    '22.333.222.42'.replace(regexp, 'X')
    // X.X.X.X

    // Procura: letras seguidos com 1 caracter ou mais
    const regexpLetras = /\w{1,}/g

    'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X')
    // X X é X
}
 
const Mais_ = slide_22 => {

    // Mais +
    // O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

    // Procura: dígitos em ocorência de um ou mais
    const regexp = /\d+/g

    '222.333.222.42'.replace(regexp, 'X')
    // X.X.X.X

    // Procura: Começa com d, seguido por uma ou mais letras.
    const regexpLetras = /d\w+/g

    'Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras, 'X')
    // Dígitos, X, X, Dito, d
}

const Asterisco_ = slide_23 => {

    // Asterisco *
    // O sinal de * significa que devemos selecionar quando existir 0 ou mais ocorrências.

    // Procura: Começa dom d, seguido por zero ou mais letras.
    const regexp = /d\w+/g

    'Digitos, dados, desenhos, Dito, d'.replace(regexp, 'X')
    // Dígitos, X, X, Dito, X
}

const Opcional_ = slide_24 => {

    // Opcional ?
    // O sinal "?" significa que o caracter é opcional, pode, ou não, existir.

    // Procura: Por regex com o "p" opcional
    const regex = /regexp?/g
    // nota: o "?" diz repeito apenas ao caracter diretamente à sua esquerda

    'Qual é o certo, regepx ou regex?'.replace(regex, 'Regular Expression')
    // Qual é o certo, Regular Expression ou Regular Expression?
}

const Alternado = slide_25 => {

    // Alternado |
    // O sinal "|" selecionará um ou outro. "Java|php"

    // Procura: java ou php (case insensitive)
    const regex = /java|php/gi

    'PHP e Java são linguagens diferentes'.replace(regex, 'X')

    // X e X são linguagens diferentes
}

const Word_Boundary = slide_26 => {

    // Word Boundary \b
    // O sinal "\b" irá selecionar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

    // Procura: java (case insensitive)
    const regex = /java/gi
    'Java não é JavaScript.'.reolace(regex, 'X')
    // X não é XScript

    // Procura: java (case insensitive)
    const regexBoundary = /\bjavaz\b/gi
    'Java não é JavaScipt.'.replace(regexBoundary, 'X')
    // X não é JavaScipt. 

    // Procura: Dígitos em sequencia, que sejam isolados
    const regexDigito = /\b\d+\b/gi
    'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexDigito, 'X')
    // O Restaurante25 na Rua X, custa R$ X,X
}

const Not_Word_Bondary = slide_27 => {

    // Not Word Boundary \B
    // É o contrário do \b

    const regexDigito = /\Bd+\B/gi

    '11_22 33-44 55é66 77e88'.replace(regexDigito, 'X')
    // 1X_X2 33-44- 55é66 7XeX8
}

const Anchor_Beginning = slide_28 => {

    // Anchor Beggining
    // Com o ^ é possível informar que a busca deve ser iniciada no início da linha

    // Procura: sequência de alfanuméricos no início da linha
    const regexp = /^\w+/g

    `andre@origamid.com
    contato@origamid.com`.replace(regexp, 'X')
    // X@origamid.com
    // contato@origamid.com
}

const Flag_m = slide_30 => {

    // Flag: m
    // Com a flag "m" de multiline, podemos informar que a busca de início "^" e final "$" de linha devem ocorrer em todas as linhas disponíveis.

    // Procura: sequência de alfanuméricos no final das linhas
    const regexp= /\w+$/gm

    `andre@origamid.com
    conato@origamid.com`.replace(regexp, 'X')
    // andre@origamid.X
    // contato@origamid.X

    // Procura: sequência de alfanuméricos no início da linha.
    const regexp = /^\w+/gm

    `andre@origamid.com
    contato@origamid.com`.replace(regexp, 'X')
    // X@origamid.com
    // X@origamid.com
}

const Line_Feed_n = slide_31 =>{

    // Line Feed \n
    // O \n irá selecionar o final de uma linha, quando criarmos uma nova.

    const regexp = /\n/g

    `andre@origamid.com\nontato@origamid.com`.replace(regexp, '---')
    // andre@origammid.com---contato@origamid

    `andre@origamid.com
    contato@origamid.com`.replace(regexp, '---')
    // andre@origamid.com---contato@origamid.com

    // \t seleciona tabs
}

const Unicode_u = slide_32 => {

    // Unicode \u
    // O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o "@".

    // Procura: @ ou 'copy-symbol(nao lembro como coloca)'
    const regepx = /\u0040|\u00A9/g

    'andre@origamid.com *copy-symbol'.replace(regepx, '---')
    // andre---origamid.com ---
}