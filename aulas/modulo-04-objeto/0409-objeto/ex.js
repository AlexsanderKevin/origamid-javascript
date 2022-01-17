// Crie uma função que verifique corretamente o tipo de dado
const showType = target => Object.prototype.toString.call(target)

// console.log(showType(12))

// Crie um objeto 'quadrado' com a propriedade 'lados' e torne ela imutável
const quadrado = {}

Object.defineProperties(quadrado, { // nota: aparentemente não tem como definir as propriedades ao criar o objeto, apenas com o metodo defineProperties()
    lados: {
        value: 4,
        configurable: false,
        enumerable: false,
        writable: false,
    },
})
quadrado.lados = 5
console.log(quadrado.lados)

// Previna qualquer mudança no objeto abaixo 
const configuracao = {
    width: 800,
    height: 600,
    backgroud: '#333'
}
Object.freeze(configuracao)
Object.seal(configuracao)
Object.preventExtensions(configuracao)

// Liste o nome de todas as propriedades do protótipo de String e Array
// const propriedadesString = Object.getOwnPropertyDescriptors(String.prototype) // nota: trata-se de um método do construtor Object, então de ver aplicado depois dele
const propriedadesString = Object.getOwnPropertyNames(String.prototype) 

// const propriedadesArray = Object.getOwnPropertyDescriptors(Array.prototype)
const propriedadesArray = Object.getOwnPropertyNames(Array.prototype)

console.log('String', propriedadesString, 'Array', propriedadesArray)