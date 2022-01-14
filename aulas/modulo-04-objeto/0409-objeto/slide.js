// Object
    // Todo objeto é criado com o construtor Object, por isso herda as propriedades e métodos de seu prototype
    const carro = {
        marca: 'Ford',
        ano: 2018,
    }

    const pessoa = new Object({
        nome: 'André',
        idade: 28,
    })

// Métodos de Object
    // Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento
    const carro2 = {
        rodas: 4,
        init(marca){
            this.marca = marca
            return this
        }, 
        acelerar(){
            return `${this.marca} acelerou as ${this.rodas} rodas`
        },
        buzinar(){
            return this.marca + ' buzinou'
        },
    }

    const honda = Object.create(carro2) // funciona como  a Função Construtora, porém passando como parametro o objeto de referencia
    honda.init('Honda').acelerar()

// Object.assign()
    // Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo
    const funcaoAutomovel = {
        acelerar(){
            return 'acelerou'
        },
        buzinar(){
            return 'buzinou'
        },
    }
    const moto3 = {
        rodas: 2,
        capacete: true,
    }
    
    const carro3 = {
        rodas: 4,
        mala: true
    }

    Object.assign(moto3, funcaoAutomovel) // nota: isso modifica o alvo, então 'moto' passa a ser diferente do que era antes
    Object.assign(carro, funcaoAutomovel) // nota: isso vai atribuir a esses dois objetos (carro e moto) as propriedades do objeto 'uncaoAutomovel'
    // nota: em caso de o alvo e os demais objetos tiverem propriedades de mesmo nome a propriedade será sobrescrita pelo ultimo objeto

// Object.defineProperties
    // Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades 
    const moto = {}
    Object.defineProperties(moto, {
        rodas: {
            value: 2,
            configurable: false, // impede deletar e mudar de valor
            enumerable: true // torna enumerável // nota: propriedades enumeráveis podem ser adicionadas ao objeto alvo do método assign()
        },
        capacete: {
            value: true,
            configurable: true,
            writable: false // impede mudança de valor mesmo que 'configurable' esteja 'true' 
        },
    })

    delete moto.capacete // deleta a propriedade desde que a mesma seja configurable

// get e set
    // É possível definirmos diferentes comportamentos para 'get' e 'set' de uma propriedade. Lembrando que ao contrário de uma propriedade obj.propriedade, a função 'get' é ativada e, ao setarmos obj.propriedade = 'Valor', a função de 'set' é ativada

    const moto2 = {}
    Object.defineProperties(moto, {
        velocidade: {
            get(){
                return this._velocidade // nota: o _underline antes da propriedade serve para diferenciar da propriedade 'velocidade' já declarada
            }, 
            set(valor){
                this._velocidade = 'Velocidade' + valor
            }
        },
    })
    moto.velocidade = 200

// Object.getOwnPropertyDescriptors(obj)
    // Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações

    Object.getOwnPropertyDescriptors(Array)
    // Lista com métodos e propriedades de Array

    Object.getOwnPropertyDescriptors(Array.prototype)
    // Lista com métodos e propriedade do protótipo de Array

    Object.getOwnPropertyDescriptor(window, 'innerHeight')
    // Puxa uma única propriedade

// Object.keys(obj), Object.values(obj), Object.entries(obj)
    // Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
    // Object.values(obj) retorna uma array com os valores do objeto. 
    // Object.entries(obj) retorna uma array com arrays contendo chave e valor
    Object.keys(Array)
    //[] vazia, pois não possui propriedades enumeráveios
    // nota: propriedades que não especificam enumerabilidade são setadas, por padrão, como 'false'

    const carro4 = {
        marca: 'Ford',
        ano: 2018,
    }
    Object.keys(carro4)
    // ['marca', 'ano']

    Object.values(carro4)
    // ['Ford', 2018]

    Object.entries(carro)
    // [['marca', 'Ford'], ['ano', 2018]]

// Object.getOwnPropertyNames(obj)
    // Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo)
    
    Object.getOwnPropertyNames(Array)
    // ['Array', 'name', 'prototype', 'isArray', 'from', 'of'] 
    // nota: retorna até as não enumeraveis

    Object.getOwnPropertyNames(Array.prototype)
    // [..., 'filter', 'map', 'every', 'some', 'reduce', ...]
    // nota: protótipo é o esqueleto do que será retornado de uma função, as propriedades e métodos que a função quer que seu retorno tenha

    const carro5 = {
        marca: 'Ford',
        ano: 2018,
    }
    Object.getOwnPropertyNames(carro5)
    // ['marca', 'ano']

// Object.getPrototypeOf() e Object.is()
    // Object.getPrototypeOf(), retorna o protótipo do objeto.
    // Object.is(obj1, Obj2) verifica se os objetos são iguais e retorna 'true' ou 'false'
    
    const frutas = ['Banana', 'Pêra']
    Object.getPrototypeOf(frutas)
    Object.getPrototypeOf('') // String
    
    const frutas1 = ['Banana', 'Pêra']
    const frutas2 = ['Banana', 'Pêra']
    
    Object.is(frutas1, frutas2) // false
    // nota: Object.is() verifica se o objeto é LITERALMENTE o mesmo

// Object.freeze(), Object.seal(), Object.preventExtensions()
    // Object.freeze() impede qualquer mudança nas propriedades.
    // Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas.
    // Object.preventExtensions() previne a adição de novas propriedades // nota: aparentemente permite que propriedades existentes sejam modificadas.

    const carro6 = {
        marca: 'Ford',
        ano: 2018
    }
    Object.freeze(carro6)
    Object.seal(carro6)
    Object.preventExtensions(carro6)

    Object.isFrozen(carro6) // true
    Object.isSealed(carro6) // true
    Object.isExtensible(carro6) // false // nota: pergunta se é possivel extender, então é 'false'

// Propriedades e Métodos do Protótipo
    // Já que tudo em Javascript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. 
    // {}.constructor retorna a função construtora do objeto

    const frutas3 = ['Banana', 'Uva']
    frutas3.constructor // Array

    const frase = 'Isso é uma String'
    frase.constructor // String

// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
    // {}.hasOwnProperty('prop') Verifica se possui a propriedade e retorna 'true'. A propriedade deve ser direta do objeto e não do protótipo.
    // {}.propertyIsEnumerable() verifica se a propriedade é enumerável

    const frutas4 = ['Banana', 'Uva']

    const temPropriedade = frutas4.hasOwnProperty('map') // false
    Array.hasOwnProperty('map') // false
    // nota: nesse caso, quem teria a propriedade map seria o protótipo, por isso o retorno é falso
    Array.prototype.hasOwnProperty('map') // true

    Array.prototype.propertyIsEnumerable('map') // false
    const enumeravel = window.propertyIsEnumerable('innerHeight') // true

// {}.toString()
    // Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do:
    // Object.prototype.toString.call.(valor)

    const frutas5 = ['Banana', 'Uva']
    // nota: por padrão, em arays o toString() simplesmente junta tudo e coloca dentro de uma string
    frutas5.toString() // 'Banana,Uva'
    typeof frutas5 // object
    Object.prototype.toString.call(frutas5) // [object array]

    const frase2 = 'Uma String'
    frase.toString() // 'Uma String'
    // nota: retorna ela mesma, não acontece nada

    typeof frase2 // string
    Object.prototype.toString.call(frase2) // [object String]
    // nota: isso retorna o tipo do dado alvo porque é isso que 'toString()' faz dentro do protótipo em que foi encontrado, diferente do que ele faz dentro de um protótipo de array, que é juntar tudo numa stringzona

    const carro8 = {marca: 'Ford'}
    carro8.toString() // [object Object]
    typeof carro8 // object