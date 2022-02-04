const Async_Await = slide_2 => {

    // async / await
    // A palavra "async" indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de coninuar. O "await" irá indicar a promise que devemos esperar. Faz parte do ES8

    async function puxarDados(){
        const dadosResponse = await fetch('./dados.json')
        // nota: dadosResponse vai receber um objeto do tipo "Response" ao inves de um objeto do tipo "Promise"
        const dadosJSON = await dadosResponse.json()

        document.body.innerText = dadosJSON.titulo
    }
    puxarDados()

    // nota: a funcionalidade "await" tem utilizade analoga ao .then()
}

const then_async = slide_3 => {
    
    // then / async
    // A diferença é uma sintaxe mais limpa.

    function iniciarFetch(){
        fetch('./dados.json')
        .then( dadosResponse => dadosResponse.json() )
        .then( dadosJSON => {
            document.body.innerText = dadosJSON.titulo
        })
    }
    iniciarFetch()

    async function iniciarAsync(){
        const dadosResponse = await fetch('./dados.json')
        const dadosJSON = await dadosResponse.json()
        document.body.innerText = dadosJSON.titulo
    }
    iniciarAsync(0)
}

const Try_e_Catch = slide_4 => {

    // Try / Catch
    // Para lidarmos com erros nas promises, podemos utilizar o "try" e o "catch" na função

    async function puxarDados(){
        try {
            const dadosResponse = await fetch('./dados.json')
            const dadosJSON = await dadosResponse.json()
            document.body.innerText = dadosJSON.titulo
        }
        catch(erro){
            console.log(erro)
        }
    }
    puxarDados()
}

const Iniciar_Fetch_ao_Mesmo_Tempo = slide_5 => {

    // Iniciar Fetch ao Mesmo Tempo
    // Não precisamos esperar a resposta resolvida do fetch para transformarmos a response em JSON.

    async function iniciarAsync(){
        const dadosResponse = fetch('./dados.json')
        const clientesResponse = fetch('./clientes.json')

        // ele espera o que estpa dentro da expressão () ocorrer primeiro
        const dadosJSON = await (await dadosResponse).json()
        const clientesJSON = await (await clientesResponse).json()
    }
    iniciarAsync()
}

const Promise = slide_6 => {

    // Promise
    // O resultado da expressão à frente de await tem que ser uma promise.
    // E o retorno do await será sempre o resultado desta promise

    async function asyncSemPromise(){
        // Console não esperará
        await setTimeout(() => console.log('Depois de 1s'), 1000)
        console.log('acabou')
    }
    asyncSemPromise()
}