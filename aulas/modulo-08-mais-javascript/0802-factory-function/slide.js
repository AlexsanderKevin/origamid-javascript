const Factory_Function = slide_2 => {

    // Factory Function 
    // São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave "new". Possuem basicamente a mesma função que constructor functions / classes.

    function createButton(text){
        function element(){
            const buttonElement = document.createElement('button')
            buttonElement.innerText = text
            return buttonElement
        }
        return {
            element: element,
            text: text
        }
    }
    const compraBtn = createButton('Comprar')

    // nota: existe uma diferença de performance. Factory functions são menos optimizadas.
}

const Métodos_e_Variáveis_privadas = slide_3 => {

    // Métodos / Variáveis privadas
    // Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas

    function criarPessoa(nome, sobrenome){
        const nomeCompleto = `${nome} ${sobrenome}`

        function andar(){
            return `${nomeCompleto} andou`
        }
        function nadar(){
            return `${nomeCompleto} nadou`
        }
        return {
            nome,
            sobrenome,
            andar,
            nadar
        }
    }
}

const Ice_Factory = slide_4 => {

    // Ice Factory
    // Podemos impedir que os métodos e propriedades sejam modificados com "Object.freeze()". Ideia inicial de Douglas Crockford.

    'use strict'

    function criarPessoa(nome, sobrenome){
        const nomeCompleto = `${nome} ${sobrenome}`
        function andar(){
            return `${nomeCompleto} andou`
        }
        return Object.freeze({
            nome,
            sobrenome,
            andar
        })
    }
}

const Constructor_Function_e_Factory_Function = slide_5 => {

    // Constructor Function / Factory Function
    // Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave "new". Também é possível fazer isso com uma Constructor Function.

    function Pessoa(nome){
        if(!(this instanceof Pessoa)) // ou (!new.target)
            return new Pessoa(nome)
        this.nome = nome
    }

    Pessoa.prototype.andar = function(){
        return `${this.nome} andou`
    }

    const designer = Pessoa('Andre')
}

const Exemplo_Real = slide_6 => {

    // Exemplo Real
    function $$(selectedElements){
        const elements = document.querySelectorAll(selectedElements)

        function on (onEvent, callback){
            elements.forEach(element => {
                element.addEventListener(onEvent, callback)
            })
            return $$(selectedElements)
        }
        function hide(){
            elements.forEach(element => {
                element.style.display = 'none'
            })
            return $$(selectedElements)
        }
    }
}