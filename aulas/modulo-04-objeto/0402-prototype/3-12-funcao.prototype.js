// funcao.prototype
// é possível adicionar novas propriedades e métodos ao objeto prototype

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}
const andre = new Pessoa('André', 28)

Pessoa.prototype.andar = function(){
    return this.nome + ' andou'
}
Pessoa.prototype.nadar = function(){
    return this.nome + ' nadou'
}

console.log(Pessoa.prototype) // retorna o objeto

// this is usefull to add a method or property to a constructor that will be used only for that context, since it will esxist only in that scope