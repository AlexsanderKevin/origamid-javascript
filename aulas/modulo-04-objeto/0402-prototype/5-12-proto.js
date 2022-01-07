// __proto__
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método mas o __proto__ não terá acesso ao this.nome
andre.andar()
andre.__proto__.andar()