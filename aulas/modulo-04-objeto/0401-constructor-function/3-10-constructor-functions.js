// construction functions
// para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos semquer que chamamos a mesma
function Carro(){ // as boas práticas ditam que métodos construtores tenham o nome com a primeira letra Maiúscula (pascal cased)
    this.marca = 'marca' // o 'this' não aparenta apontar para o metodo construtor, mas sim para o objeto que será criado a partir dele
    this.preco = 0
}

const honda = new Carro() // para criar uma instancia de uma classe é necessário colocar o 'new' antes do método construtor
honda.marca = 'honda'
honda.preco = 4000

const fiat = new Carro()
fiat.marca = 'fiat'
fiat.preco = 3000