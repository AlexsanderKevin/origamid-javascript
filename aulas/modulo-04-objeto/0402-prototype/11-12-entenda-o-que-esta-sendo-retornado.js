// Entenda o que está sendo retornado 
// Os métodos e propriedades acessados com o . são referentes ao tipo d edados que é retornado antes dess .

const Carro = {
    marca: 'ford',
    preco: 2000,
    acelerar(){
        return true
    }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

// Verifique o nome do construtor com .constructor.name