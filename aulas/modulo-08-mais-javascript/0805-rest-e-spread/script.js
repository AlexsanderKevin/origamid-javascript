function perimetroForma(lado, totalLados = 4){

    // totalLados = totalLados || 4 // nota: isso era a forma antiga de se passar um valor default para um parametro opcional
    console.log(arguments)
    return lado * totalLados
}

function anunciarGanhadores(premio, ...ganhadores){ // nota: aparentemente isso transforma o conjunto dos argumentos recebidos em uma Array chamada "ganhadores"
    ganhadores.forEach(ganhador =>{
        console.log(ganhador + ' ganhou ' + premio)
    })
}

// anunciarGanhadores('Carro','Pedro', 'Marta', 'Maria')

const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas, 'Pizza', ...legumes]
// console.log(comidas)

const numeroMaximo = Math.max(4,2,5,5,23,35,23,12)

const listaNumeros = [12,3,5,4,2,456,56,34,2345]
const numeroMaximoSpread = Math.max(...listaNumeros)

//////////////////////////////////////////////////////////////////////////

const btns = document.querySelectorAll('button')
console.log(btns)
const btnsArray = [...btns]
console.log(btnsArray)