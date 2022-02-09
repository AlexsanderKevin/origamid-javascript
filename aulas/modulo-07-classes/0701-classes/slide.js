const Constructor_Function = slide_2 => {

    // Constructor Function
    // Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.

    function Button(text, background){
        this.text = text
        this.background = background
    }

    Button.prototype.element = function(){
        const buttonElement = document.createElement('button')
        buttonElement.innerText = this.text
        buttonElement.style.background - this.background
        return buttonElement
    }

    const blueButton = new Button('Comprar', 'blue')
}

const Class = slide_3 => {

    // Class
    // O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave "class". É considerada "syntactical sugar", pos por baixo dos panos continua utilizando o sistema de protótipo de uma função construtora para criar a classe.

    class Button{
        constructor(text, background){
            this.text = text
            this.background = background
        }
        element(){
            const buttonElement = document.createElement('button')
            buttonElement.innerText = this.text
            buttonElement.style.background = this.background
            return buttonElement
        }
    }
}

const Class_vs_Constructor_Function = slide_4 => {

    // Class vs Constructor Function
    class Button{
        constructor(propriedade){
            this.propriedade = propriedade
        }
        method1(){}
        method2(){}
    }

    function Button(propriedade){
        this.propriedade = propriedade
    }
    Button.prototype.method1 = function(){}
    Button.prototype.method2 = function(){}
}

const Constructor = slide_5 => {

    // Constructor
    // O método "constructor(args){}" é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em "new" vão direto para o constructor.
    
    class Button {
        constructor(text, background, color){
            this.text = text
            this.background = background
            this.color = color
        }
    }

    const blueButton = new Button('Clique', 'blue', 'white')
    // Button {text: 'Clique', background:'blue', color:'white'}
}

const Constructor_Return = slide_6 => {

    // Constructor Return
    // Por padrão a classe retorna "this". Ou seja, "this" é o objeto criado com o "new Class". Podemos modificar isso alterando o return do constructor, o problema é que perder-se-á toda a referência do objeto.

    class Button {
        constructor(text){
            this.text = text
            return this.element() // não se deve fazer isso
        }
        element(){
            document.createElement('button').innerTExt = this.text
        }
    }
    const btn = new Button('Clique')
    // <button>Clique</button>
}

const This = slide_7 => {

    // This
    // Assim como em uma função construtora, "this" faz referência ao objeto criado com "new". É possível acessar as propriedades e métodos da classe utilizando o "this".

    class Button {
        constructor(text){
            this.text = text
        }
        element(){
            const buttonElement = document.createElement('button')
            buttonElement.innerText = this.text
            return buttonElement
        }
        appendELementTo(target){
            const targetElement = document.querySelector(target)
            targetElement.appendChild(this.element())
        }
    }
}

const Propriedades = slide_8 => {

    // Propriedades
    // Podemos passar qualquer valor dentro de uma propriedade

    class Button{
        constructor(options){
            this.options = options
        }
    }

    const blueOptions = {
        backgroundColor = 'blue',
        color = 'white',
        text = 'Clique',
        borderRadius = '4px',
    }
    const blueButton = new Button(blueOptions)
    blueButton.options
}

const Static_vs_Prototype = slide_9 => {

    // Static vs Prototype
    // Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave "static". Assim com "[].map()" é um método de uma array e "Array.from()" é um método do construtor Array.

    class Button {
        constructor(text){
            this.text = text
        }
        static create(background){
            const elementButton = document.createElement('button')
            elementButton.style.background = background
            elementButton.innerText = 'Clique'
            return elementButton
        }
    }

    // nota: métodos do prototipo são aqueles acessiveis pelo objeto criado a partir de uma função construtora, enquanto que métodos estáticos estão atrelados às funções construtoras em si.
}

const Static = slide_10 => {

    // Static
    // Você pode utilizar um método "static" para retornar a própria classe com propriedades pré definidas.

    class Button {
        constructor(text, background){
            this.text = text
            this.background = background
        }
        element(){
            const buttonElement = document.createElement('button')
            buttonElement.innerText = this.text
            buttonElement.style.background = this.background
            return elementButton
        }
        static createBlue(text){
            return new Button(text, 'blue') // nota: curiosamente é possivel chamar a si mesmo de dentro das static functions
        }
    }
}