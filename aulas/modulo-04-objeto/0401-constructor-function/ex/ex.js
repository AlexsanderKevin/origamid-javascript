// turn the following object into a Constructor Function
const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0,
    andar(){
        console.log(this.nome + ' andou')
    }
}

function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = () => console.log(nome + ' andou')
}

// create three people: joao - 20 anos, maria - 25 anos, bruno - 15 anos
const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)
// create a Dom constructor Function to manipulate an element list of dom's elements. 
//It must contain the following properties and methods:

// elements: returns a NodeList with the selected elements
// addClass(classe), add a class to all elements
// removeClass(class), remove the class from all element
function Dom (selector) {
    const elementList = document.querySelectorAll(selector)

    this.elements = elementList
    this.addClass = classe => {
        this.elements.forEach(element => element.classList.add(classe))
    }
    this.removeClass = classe => {
        this.elements.forEach(element => element.classList.remove(classe))
    }
    console.log(this)
}

const lista = new Dom('ul li')
lista.addClass('ativo')
lista.removeClass('ativo')