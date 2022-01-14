// Function
    // Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos

    function areaQuadrado(lado){
        return lado * lado
    }
    const  perimetroQuadrado = new Function('lado', 'return lado * 4')

// Propriedades
    // Function.length retorna o total de argumentos da função
    // Function.name retorna uma string com o nome da função
    function somar(n1, n2) {
        return n1 + n2
    }
    somar.length // 2
    somar.name // 'somar'
    // nota: estas propriedades funcionam apenas quando utilizadas sem chamar a função, ou seja, sem os (), caso contrário, qualquer método aplicado será referente ao retorno da função, e não à função em si, que é o que queremos aqui.
    // somar != somar()

// function.call()
    // function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao 'this' da mesma

    const carro = {
        marca: 'Ford',
        ano: 2018
    }

    function descricaoCarro(){
        console.log(this.marca + ' ' + this.ano)
    }
    descricaoCarro() // undefined undefined
    descricaoCarro.call() // undefined undefined
    descricaoCarro.call(carro) // Ford 2018
    // nota: o call() aponta o 'this' da função alvo para o parâmetro passado parra call()

// This
    // O valor de 'this' faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao 'this' utilizando o call()
    const carros = ['Ford', 'Fiat', 'VW']

    carros.forEach(item => console.log(item)) // log de cada carro
    carros.forEach.call(carros, item => console.log(item)) // log de cada carro

    const frutas = ['Banana', 'Pêra', 'Uva']
    
    carros.forEach.call(frutas, (item) => console.log(item)) // log de cada fruta

    // Exemplo Real
        // O objeto atribuído à 'lista' será o substituído pelo primeiro argumento de call()

        function Dom(seletor){
            this.element = document.querySelector(seletor)
        }
        Dom.prototype.ativo = function(classe){
            this.element.classList.add(classe)
        }

        const lista = new Dom('ul')

        const li = {element: document.querySelector('li')}

        lista.ativo.call(li, 'ativar') // nota: isso aplica o metodo 'ativo()' do objeto 'lista' ao objeto 'li', que originalmente não possui tal método
        console.log(lista)
        // o método passado com o call() deve ser sempre parecido com o objeto original
    
    // O Objeto deve ser parecido
        // O novo valor de 'this' deve ser semelhante à estrutura do valor do 'this' original do método.  Caso contrário o método não conseguirá interagir de forma correta com o novo 'this'

        const novoSeletor = {
            element: document.querySelector('li')
        }
        Dom.prototype.ativo.call(novoSeletor, 'ativar')
        // esse caso fica menos estranho do que anteriormente onde o método era aplicado em um objeto para afetar outro. Nessa situação, o método é aplicado ao protótipo da propria função que possui a função alvo

    // Array's e Call
        // É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like)
        Array.prototype.mostraThis = function(){
            console.log(this)
        }
        const frutas2 = ['Uva', 'Maçã', 'Banana']
        frutas2.mostraThis() // ['Uva', 'Maçã', 'Banana']

        Array.prototype.pop.call(frutas2) // Remove Banana
        frutas2.pop() // Mesma coisa que a função acima

    // Array-like
        // HTMLCollection, NodeList e demais objetos do Dom, são parecidos com umas array. Por isso conseguimos utilizar os mesmos na substituição do 'this' em call()

        const li = document.querySelectorAll('li')

        const filtro = Array.prototype.filter.call(li, function(item){
            return item.classList.contains('ativo')
        })
    
        filtro // Retorna os itens que possuem ativo
    
// functions.apply()
    // O apply(this, [arg1, arg2, ...]) functiona como o call, a única diferença é que os argumentos da função são passados através de uma única array
    const numeros3 = [3,4,6,1,34,44,32]
    Math.max.apply(null, numeros3) // nota: diferente do call(), o apply não requer quer os parametros sejam passados inline, pode-se passa-los por uma variavel que contenha a array de argumentos
    Math.max.call(null, 3, 4, 5, 6, 7, 20)

    // podemos passar 'null' como argumento para o valor de 'this', caso a função não utilize o objeto principal para funcionar

    // Apply vs Call
        // A única diferença é a array como segundo argumento

// function.bind()
        // Diferente de call() e apply(), bind(this, arg1, arg2, ...) não irá exevutar a função mas sim retornar a mesma coisa com o novo contexto de this
        const li = document.querySelectorAll('li')

        const filtrarLi = Array.prototype.filter.bind(li, function(item){
            return item.classList.contains('ativo')
        })
        filtrarLi() // nota: uma das diferenças para os metodos anteriores é que, para que seja retornado o resultado da função é necessário chama-la com os (). Os demais métodos não funcionam como callback, aparentemente, ou talvez funcionem dentro de uma arrow function, não sei.

        // bind() é muito bom para encurtar funções:
        const $ = document.querySelectorAll.bind(document) // nesse caso, foi passado apenas o valor de 'this', isso significa que os parametros poderão  ser passados quando o novo método for chamado
        $('li') //  $('li') == document.querySelectorAll('li')

        // Argumentos e Bind
            // Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.
            const carro = {
                marca: 'Ford', 
                ano: 2018,
                acelerar: function(aceleracao, tempo){
                    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
                }
            }
            carro.acelerar(100, 20)
            // Ford acelerou 100 em 20

            const honda = {
                marca: 'Honda'
            }
            const acelerarHonda = carro.acelerar.bind(honda)
            acelerarHonda(200, 10) // 'Honda acelerou 200 em 10'

        // Argumentos Comuns
            // Podemos passar argumentos padrão para uma função e retornar uma nova função.
            function imc(altura, peso){
                return peso / (altura * altura)
            }
            const imc180 = imc.bind(null, 1.80) // nota: nesse caso o primeiro argumento (alem do 'this') foi passado e o segundo foi omitido, de maneira que, ao chamar-se a função, o parametro passado na hora será referente ao segundo argumento, o parametro omitido.

            imc(1.80, 70) // 21.6
            imc180(70) // 21.6