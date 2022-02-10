class Veiculo {
    constructor(rodas){
        this.rodas = rodas
    }
    acelerar(){
        console.log('acelerou')
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete){
        // this.rodas = rodas // nota: ERRO
        super(rodas)
        this.capacete = capacete
    }
    acelerar(){
        super.acelerar()
        console.log('Rapido')
    }
    empinar(){
        console.log('Moto empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2, true)
const civic = new Veiculo(4)