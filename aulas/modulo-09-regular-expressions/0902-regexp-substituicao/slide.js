const Referencia_da_Seleção = slide_2 => {

    // Referência da Seleção
    // É possível utilizarmos o "$&" durante o momento da substituição para fazermos uma referência à seleção.

    // Procura: Java
    const regexp = /Java/g

    'PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script')
    // PHP e --JavaScript são linguagens diferentes
    // $& será igual a "Java"
}

const Grupo_de_Captura = slide_3 => {

    // Grupo de Captura
    // É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência de cada grupo será feita com $n, sendo o primeiro $1.

    // Procura: sequência alfanumérica, seguida de @, seguido de alfanumérico ou .
    const regexp = /(\w+)@[\w.]+/g

    'andre@email.com.br'.replace(regexp, '$1@gmail.com')
    // andre@gmail.com

    // Não utilize regexp para emails, ele falha em alguns casos.
}

const Mais_de_um_Grupo = slide_4 => {

    // Mais de um Grupo
    // Podemos definir quantos grupos de captura quisermos.

    // Procura: sequência alfanumérica, seguida de "," seguida de espaço de sequência alfanumérica
    const regexp = /(\w+),\s(\w+)/g

    'Rafael, Andre'.replace(regexp, '$2 $1')
    // Andre Rafael
}

const Mais_do_que_Captura_apenas = slide_5 => {

    // Mais do que Captura apenas
    // Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.

    // Procura: qualquer sequência em repetição
    const regexp = /(ta)+/gi

    'Tatata, tata, ta'.replace(regexp, 'Pá')
    // Pá, Pá, Pá
}

const Positive_Lookahead = slide_6 => {

    // Positive Lookahead
    // Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parenteses o positive lookahead não captura grupo.

    // Procura: digitos em sequência, que possuírem px, sem selecionar o px.
    const regexp = /\d(?=px)/g

    '2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X')
    // 2em, Xpx, 5%, Xpx, Xpx
}

const Negative_Lookahead = slide_7 => {

    // Negative Lookahead
    // Faz a seleção dos itens não possuírem padrão dentro de (?!) à sua frente.

    // Procura: digitos que não possuírem px sem selecionar o restante.
    const regexp = /\d(?!p)/g

    '2em, 4px, 5%, 5px, 1px'.replace(regexp, 'X')
    // Xem, 4px, X%, 5px, 1px
}