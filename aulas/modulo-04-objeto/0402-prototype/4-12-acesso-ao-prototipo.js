// Acesso ao Protótipo
// O objeto criado utiliazando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas

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

console.log(

    andre.nome,
    andre.idade,
    andre.andar(),
    andre.nadar(),
)