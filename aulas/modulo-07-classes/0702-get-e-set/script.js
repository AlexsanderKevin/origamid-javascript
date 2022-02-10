const button = {
    get tamanho(){
        // return 200
        // nota: isso é um método que simula uma propriedade, isso faz com que o valor retornado não serja alteravel, exceto pelos métodos "set"
        return this._numero || 100 // nota: os "||" indicam o valor padrão, caso não tenha-se definido um valor com o "set"
    },
    set tamanho(numero){ // nota: o método "set" deve ter o mesmo nome do método "get"
        this._numero = numero
    }
}

const frutas = {
    lista: [],
    set nova(fruta){
        this.lista.push(fruta)
    }
}

class Button {
    constructor(text, color){
        this.text = text
        this.color = color
    }
    get element(){
        const type = this._elementType || 'button'
        const buttonELement = document.createElement(type)
        buttonELement.innerText = this.text
        buttonELement.style.color = this.color
        return buttonELement
    }
    set element(type){
        this._elementType = type
        // nota: apesar de se tratar de uma propriedade privada, uma vez que for setada, ela será acessivel de todo lugar de fora. É possivel, inclusive, reatribuir o valor dessa propriedade de fora. Isso acontece porque o "get" pega e disponibiliza a propriedade.
    }
}

const blueButton = new Button('Clique Aqui', 'blue')