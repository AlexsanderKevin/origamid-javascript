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

sobre
.then( res => res.text() )
.then( body => {
    div.innerHTML = body // nota: isso recebe o documento HTML inteiro do arquivo "sobre.html"
    const titulo = div.querySelector('h1')
    document.querySelector('h1').innerText = titulo.innerText

})