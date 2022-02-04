async function puxarDados(){

    try{

        const promise = fetch('./dados.json') // nota: [Object Promise]
        const resposta = await fetch('./dados.json') // nota: [Object Response]
        const respostaJSON = await fetch('./dados.json').then( res => res.json()) // nota: retorna o proprio JSON
    
        console.log(promise, resposta, respostaJSON, respostaJSON.aula)
    } catch (erro) {
        console.log(erro)
    }
}

async function iniciarAsync() {

    const dadosResponse = fetch('./dados.json')
    
    // const dadosJSON = await dadosResponse.json() // nota: não funciona porque .json() é um método do objeto Response e "dadosResponse" é um objeto do tipo Promise
    const dadosJSON = await (await dadosResponse).json()

    console.log( dadosJSON )
}
iniciarAsync()