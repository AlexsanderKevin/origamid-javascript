fetch('./dados.json')
.then(r => r.text())
.then( jsonText => {

    const jsonFinal = JSON.parse(jsonText)

    jsonFinal.forEach( item => {
        console.log( item.aula )
    })
})

const configuracao = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

const stringConfig = JSON.stringify(configuracao)
console.log(stringConfig)

localStorage.configuracao = stringConfig