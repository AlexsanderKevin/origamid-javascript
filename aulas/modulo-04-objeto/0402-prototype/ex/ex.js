// Create a constructor function of People
// it must have: name, lastname and age
// Create a method in the prototype that returns the person's fullname

function Person(name, lastname, age){
    this.name = name // I was puttin ',' after every properties as if it wore an object itself
    this.lastname = lastname
    this.age = age
    // this.fullName = ()=>{              // I should've done this in the prototype, not in the constructor
    //     return name + ' ' + lastname
    // }
} 

Person.prototype.fullName = ()=>{
    return name + ' ' + lastname
}

const pedro = new Person('Pedro', 'Silva', 34) // I forgot to put the 'new' before calling the constructor

// liste os construtores dos dados abaixo
const li = document.querySelector('li')

li // HTMLLIElement (HTML LI Element)
li.click // function click()
li.innerText // String
li.value // number
li.hidden // boolean
li.offsetLeft // name
li.click() // undefined (probably it's a fake method)

// Qual o construtor do dado abaixo
li.hidden.constructor.name // string