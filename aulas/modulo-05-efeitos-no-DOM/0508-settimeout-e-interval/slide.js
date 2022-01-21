// setTimeout()
    // setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após o tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila de espera pela Call Stack estar vazia.

    function espera(texto){
        console.log(texto)
    }

    setTimeout(espera, 1000, 'Depois de 1s') // nota: o tempo está em milisegundos, então nesse caso 100 milisegundos == 1 segundo 

// Imediato
    // Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na 'fila' imediatamente para ser executado assim que possível. Podemos passar uma função anônima diretamente com argumento.

    setTimeout(() => {
        console.log('Após 0s?')
    })

    //nota: o setTimeout(), além de contar os segundos, faz com que o callback espere pelo loop que está acontecendo acabar para entrar na call stack

// Loops e setTimeout
    // Um loop é executado rapidamente, em milisegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api preticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

    for(let i = 0; i < 20; i++){
        setTimeout(() => {
            console.log(i)
        }, 300)
    } // nota: nesse caso o código vai executar praticamente tudo ao mesmo tempo, porque serão iniciadas as contagens ao mesmo tempo.
    // nota: uma maneira de corrigir o equivoco do código acima é multiplicando o tempo pelo 'i', fazendo com que, a cada iteração, o tempo de espera aumente de maneira proporcional.
    for(let i = 0; i < 20; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000 * i) // nota: aqui o tempo está multiplicado pelo indice da iteração, fazendo com que exista um intervalo de 1*tempo entre um callback e outro
    }

// This e Window
    // setTimeout() é um método do objeto Window. O valor de 'this' dentro do mesmo callback é uma referência ao seu objeto, no caso, o Window.

    const btn = document.querySelector('button')
    btn.addEventListener('click', handleClick)

    function handleClick(event){
        setTimeout(function(){
            this.classList.add('active')
        }, 1000)
    }
    // Erro pois o window.classList não existe.
    // nota: a maneira de corrigir este erro é utilizando as arrow functions, afinal elas apontam a referencia 'this' sempre ao elementos 'pai' do callback

// setInterval
    // setInterval(callback, tempo, arg1, arg2, ...) irá ativar o callback toda vez que a quantidade de tempo passar.

    function loop(texto){
        console.log(texto)
    }
    setInterval(loop, 1000, 'Passou 1s')

    // loop a cada segundo
    let i = 0 
    setInterval(() => {
        console.log(i++)
    }, 1000)

// clearInterval
    // clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

    const contarAté10 = setInterval(callback, 1000)

    let i = 0
    function callback(){
        console.log(i++)

        if(i > 10){
            clearInterval(contarAté10)
        }
    }