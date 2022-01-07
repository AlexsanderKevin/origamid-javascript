// É possível acessar a função do protótipo
// é comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array

const lista = document.querySelectorAll('li')

// Transforma em uma array 
const listaArray = Array.prototype.slice.call(lista)

// Existe o método Array.from()

// A diferença entre Array e NodeList é, a principio, o protótipo de cada um, bem como o fato de que o protótipo de Array possui muito mais métodos