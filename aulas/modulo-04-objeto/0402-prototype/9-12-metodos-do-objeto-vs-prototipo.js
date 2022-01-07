// Métodos do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo

Array.prototype.slice.call(lista)
Array.from(lista)

// retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array)
Object.getOwnPropertyNames(Array.prototype)

// dados.constructor.name retorna o nome do construtor

// apenas os Métodos do Protótipo são Herdados