const Subclasses = slide_2 => {

    // Subclasses
    // É possível criarmos uma subclasse, esta terá acesso aos métodos da classe à qual ela 'estendeu' através do seu protótipo.

    class Veículo {
        constructor(rodas){
            this.rodas = rodas
        }
        acelerar(){
            console.log('Acelerou')
        }
    }

    class Moto extends Veiculo {
        empinar(){
            console.log('Empinou com ' + this.rodas + ' rodas')
        }
    }

    const honda = new Moto(2)
    honda.empinar()
}

const Métodos = slide_3 => {

    // Métodos
    // Podemos escrever por cima de um método herdado.

    class Veiculo {
        constructor(rodas){
            this.rodas = rodas
        }
        acelerar(){
            console.log('Acelerou')
        }
    }

    class Moto extends Veiculo {
        acelerar(){ // nota: o método será redefinido para esta extensão 
            console.log('Acelerou muito')
        }
    }

    const honda = new Moto(2)
}

const Super = slide_4 => {

    // Super 
    // É possível utilizar a palavra chave "super" para falarmos com a classe pai e acessarmos os seus métodos e propriedades.

    class Veiculo {
        constructor(rodas){
            this.rodas = rodas
        }
        acelerar(){
            console.log('acelerou')
        }
    }
    class Moto extends Veiculo {
        acelerar() {
            super.acelerar() // nota: isso aqui chama o método da classe pai
            console.log('Muito')
        }
    }
}

const Super_e_Constructor = slide_5 => {

    // Super e Constructor
    // Podemos utilizar o 'super' para estendermos o método construtor.

    class Veiculo {
        constructor(rodas, combustivel){
            this.rodas = rodas
            this.combustivel = combustivel
        }
    }
    class Moto extends Veiculo {
        constructor(rodas, combustivel, capacete){
            super(rodas, combustivel)
            this.capacete = capacete
        }
    }

    const honda = new Moto(4, 'Gasolina', true)
}