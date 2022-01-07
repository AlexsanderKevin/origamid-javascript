// Prototype
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}
const andre = new Pessoa('André', 28)

console.log(Pessoa.prototype) // retorna o objeto
console.log(andre.prototype) // retorna undefined