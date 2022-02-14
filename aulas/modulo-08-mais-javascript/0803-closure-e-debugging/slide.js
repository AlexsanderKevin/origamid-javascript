const Escopo = slide_2 => {

    // Escopo
    // Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para funções dentro de funções.

    let item1 = 1

    function func1(){
        let item2 = 2

        function func2(){
            let item3 = 3
        }
    }

    // func1 possui acesso a item1 e item2
    // func2 possui acesso a item1, item2, item3
}

const Clojures = slide_3 => {

    // Clojures
    // A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo dá acesso ao item2, esse escopo é chamado de "Closure" (funcao1)(escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window

    let item1 = 1

    function func1(){
        let item2 = 2

        function func2(){
            let item3 = 3
            console.log(item1)
            console.log(item2)
            console.log(item3)
        }
        func2()
    }
}

const Debugging = slide_4 => {

    // Debugging
    // É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.

    debugger // adicione a palavra debugger
    let item1 = 1
    function funcao1(){
        let item2 = 2
        function funcao2(){
            let item3 = 3
            console.log(item1, item2, item3)
        }
        funcao2()
    }
    funcao1()
}

const Caso_Classico = slide_5 => {

    // Caso Classico
    // Um dos casos mais clássicos para a demostração de Clojures é através da criação de uma função de incremento. É como se a função "incrementar" carregasse uma mochila chamada "contagem", onde uma referência para as suas variáveis estão contidas na mesma.

    function contagem(){
        let total = 0
        return function incrementar(){
            total++ 
            console.log(total)
        }
    }
    const ativarIncrementar = contagem()
    ativarIncrementar() // 1
    ativarIncrementar() // 2
    ativarIncrementar() // 3
}

const Clojures_na_Real = slide_6 => {

    // Clojures na Real
    // Todas as funções internas da Factory Funcion possuem uma clojure de $$. As mesmas contém uma referência à variável "elements" declarada dentro do escopo da função.
}