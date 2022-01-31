const doc = fetch('./doc.txt')
// nota: como o fetch faz requisições HTTP, o código acima trata o endereço de "doc.txt" como se fosse um URL.
// nesse caso a URL começaria com o endereço em que o script está rodando (aqui seria "localHost:5500")

// doc.then(resolucao => {
//     console.log(resolucao) // Mostra o objeto Response
// })

// doc.then(resolucao => {

//     resolucao.text().then(body => {
//         console.log(body)
//     })
// })

// doc
// .then(res => res.text())
// .then(body => {

//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body

//     console.log(body)
// })

const cep = fetch('http://viacep.com.br/ws/13348440/json/')

// cep
// .then( res => res.json() ) // nota: transforma em um objeto javascript
// .then( body => {
//     console.log( body )

//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body.localidade
// })

const style = fetch('./style.css')

// style
// .then( res => res.text() )
// .then( body => {
//     const conteudo = document.querySelector(".conteudo")
//     const style = document.createElement('style')

//     style.innerHTML = body
//     conteudo.appendChild(style)
// })

const sobre = fetch('./sobre.html')
const div = document.createElement('div')

// sobre
// .then( res => res.text() )
// .then( body => {
//     div.innerHTML = body // nota: isso recebe o documento HTML inteiro do arquivo "sobre.html"
//     const titulo = div.querySelector('h1')
//     document.querySelector('h1').innerText = titulo.innerText

// })

const imagem = fetch('./imagem.png')
// imagem
// .then( res => res.blob())
// .then(body => {
//     const blobUrl = URL.createObjectURL(body)
//     const imagemDom = document.querySelector('img')
    
//     imagemDom.src = blobUrl
//     // nota: parece, também, ser a melhor maneira de utilizar imagens de sites externos.
// })

const cep2 = fetch('http://viacep.com.br/ws/01001000/json/')

// cep2
// .then( res => {

//     const res2 = res.clone()

//     res.text().then(texto => {
//         console.log(texto)
//     })

//     // res.json() // nota: isso resultaria em um erro porque a linha acima já alterou a resposta

//     res2.json().then(json => {
//         console.log(json)
//     })

//     console.log(res) // nota: caso o corpo não seja alterado, a propriedade "bodyUsed" da resposta terá o valor "false", mas nesse caso o valor é "true"
// })
// .then(body => {
//     console.log(body)
// })

// headers
// imagem
// .then( res => {
//     console.log( res )
//     res.headers.forEach(console.log)
// })

const constante = fetch('./imagem.pn')

// constante
// .then( res => {

//     console.log( res.status )

//     if( res.status === 404 )
//         console.log('Página não encontrada!')
// })

constante
.then( res => {
    console.log( res.url )
    console.log( res.type )
})