// function Button(text, background){
//     this.text = text
//     this.background = background
// }

// Button.prototype.element = function(){
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = this.text
//     buttonElement.style.background = this.background
//     return buttonElement
// }

// class Button {
//     constructor(text, background){
//         this.text = text
//         this.background = background
//     }
//     element(){
//         const buttonElement = document.createElement('button')
//         buttonElement.innerText = this.text
//         buttonElement.style.background = this.background
//         return buttonElement
//     }
//     appendTo(target){
//         const targetElement = document.querySelector(target)
//         targetElement.appendChild(this.element())
//         return targetElement // nota: os métodos parecem poder retornar alguma coisa. Aparentemente é só no constructor que não pode.
//     }
// }

// const blueButton = new Button('Comprar', 'blue')

// console.log(blueButton.appendTo('body')) // nota: vale lembrar que "element" é um método que cria e retorna o elemento html do botao

class Button {
    constructor(options){
        this.options = options
    }
    static createButton(text, background){
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text // nota: aqui não está em uso a referencia "this", pois que trata-se, aqui, dos parametros passados em "createButton()" e não no construtor.
        buttonElement.style.background = background
        return buttonElement
    }
    static blueButton(text){
        return new Button(text, 'blue', 'white')
    }
}

const optionsBlue = {
    backgroundColor: 'blue',
    text: 'Comprar',
    color: 'white'
}

// const blueButton = new Button(optionsBlue)
// const blueButtonStatic = Button.createButton('Clique', 'blue')
const botaoAzul = Button.blueButton('Comprar')

console.log(botaoAzul)