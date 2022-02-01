// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar
const input_cep = document.querySelector('[data-input="cep"]')
const button_cep = document.querySelector('[data-button="cep"]')

function find_cep(cep){
    const cep_promise = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = cep_promise.then( res => res.json())
    const response_span = document.querySelector('[data-span="cep"]')
    
    console.log(json)
    const address = ``

    json.then(
         res => response_span.innerText = `
            bairro: ${res.bairro}
            cep: ${res.cep}
            complemento: ${res.complemento}
            ddd: ${res.ddd}
            gia: ${res.gia}
            ibge: ${res.ibge}
            localidade: ${res.localidade}
            logradouro: ${res.logradouro}
            siafi: ${res.siafi}
            uf: ${res.uf}
         `
    )
}

button_cep.addEventListener('click', ()=>{find_cep(input_cep.value)})

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais. 
// atualiza os valores a cada 3s

function search_bitcoin(){
    console.log('searching bitcoin...')

    const bitcoin = fetch('https://blockchain.info/ticker')
    const bitcoin_span = document.querySelector('[data-span="bitcoin"]')
    
    bitcoin
    .then( res => res.json())
    .then( res => {
        bitcoin_span.innerHTML = `Preço de compra: R$ ${res.BRL.buy}`
    })
}

setInterval(search_bitcoin(), 3000)


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que clicar em "próxima"

const joke_span = document.querySelector('[data-span="joke"]')
const joke_button = document.querySelector('[data-button="joke"]')

function next_joke(){
    console.log('proxima...')

    const joke = fetch('https://api.chucknorris.io/jokes/random')

    joke
    .then( res => res.json())
    .then( res => {
        joke_span.innerText = res.value
    })
}
next_joke()

joke_button.addEventListener('click', next_joke)