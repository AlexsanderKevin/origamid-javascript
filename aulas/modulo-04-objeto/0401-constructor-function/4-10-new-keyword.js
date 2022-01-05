// New Keyword
// A palavra chave 'new' é responsável por criar um novo objeto baseado na função que passarmos a frente dela
const honda = new Carro()

// 1 Cria um novo objeto
honda = {}

// 2 Define o protótipo
honda.prototype = Carro.prototype

// 3 aponta a variável 'this' para o objeto
this = honda

// 4 executa a função, substituindo 'this' pelo objeto
honda.marca = 'marca'
honda.preco = 0

// 5 Retorna o novo objeto
return honda = {
    marca: 'marca',
    preco: 0
}