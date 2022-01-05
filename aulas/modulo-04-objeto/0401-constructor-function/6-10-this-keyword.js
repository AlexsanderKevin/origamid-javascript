// This Keyword
// O 'this' faz referencia ao próprio objeto construido com a Constructor Function 
function Carro(marca, precoInicial){
    const taxa = 1.2
    const percoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = percoFinal
    console.log(this)
}

const honda = new Carro('Honda', 2000)

// variáveis dentro do método construtor estão isoladas