const Function_Declaration = slide_2 => {

    // Function Declaration
    // São duas formas masi comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration

    function somar(a,b) {
        return a + b
    }
    somar(4, 2) // 6
}

const Function_Expression = slide_3 => {

    // Function Expression
    // É criada a partir de uma variável, na qual assinalamos uma função. Esta função pode ser anonima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

    const somar = function(a, b){
        return a + b
    }

    somar(4, 2) // 6
}

const Hoisting = slide_4 => {

    // Hoisting
    // Function Declaration são completamente definidas no momento da execução. Por isso a ordem da declaração de um FE possui importancia

    somar(4, 2) // 6
    dividir(4, 2) // Erro

    function somar(a, b){
        return a + b
    }

    const dividir = function(a, b){
        return a / b
    }
}

const Arroy_Function = slide_5 => {

    // Arrow Function
    // Podemos criar utilizando arrow functions

    const somar = (a, b) => a + b
    somar(4, 2) // 6

    const quadrado = a => a * a
    quadrado(4) // 16
}

const Estrutura_Preferência = slide_6 => {

    // Estrutura / Preferencia
    // Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação do método antes da sua ativação, o que pode contribuir para um código mais estruturado.

    // Declarada como método de window vaza o escopo de bloco, como se fosse criada utilizando "var"

    function somar(a,b){
        return a + b
    }
    const dividir = (a, b) => a / b

    somar(4, 2)
    dividir(4, 2)
}

const IIFE_Immediately_Invoked_Function_Expression = slide_7 => {

    // IIFE - Imediately Invoked Function Expression
    // Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's

    var instrumento = 'Violão';

    (function(){
        // código isolado do escopo global
        var instrumento = 'Guitarra'
        console.log(instrumento) // 'Guitarra'
    })()

    console.log(instrumento) // 'Violão'
}

const IIFE_Arrow_Function = slide_8 => {

    // IIFE - Arrow Function
    // Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.

    const instrumento = 'Violão';

    (() => {
        const instrumento = 'Guitarra'
        console.log(instrumento) // Guitarra
    })

    console.log(instrumento) // Violão
}