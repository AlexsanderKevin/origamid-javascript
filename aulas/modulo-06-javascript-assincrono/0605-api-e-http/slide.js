const slide_2 = API => {
    
    // API

    // Application
    // Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, estamos utilizando a API do browser para nos comunicarmos com a API do servidor.

    // Programming
    // Programação. Isso significa que um comando irá encadear uma série de eventos pré-definidos. O resultado esperado é, geralmente, o mesmo.

    // Interface
    // A interface são os comandos criados para permitir a interação com a aplicação.
    // Ex: 'VIOLAO' .toLowerCase() é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito / resposta.
}

const slide_3 = Exemplos_de_API => {

    // Exemplos de API's

    // GitHub
    // https://api.github.com/users/origamid
    // https://api.github.com/users/origamid/followers

    // Array / Element
    // [].map()
    // [].filter()
    // Element.classList
    // Element.attributes

    // Clima
    // https://www.metaweather.com/api/location/455825
    // https://github.com/toddmotto/public-apis
}

const slide_4 = HTTP => {

    // HTTP
    // Hypertext Transfer Protocol é o protocolo utilizado para enviarmos / recebermos arquivos e dados na Web.

    fetch('https://pokeapi.co/api/v2/pokemon')
    .then( r => r.json() )
    .then( pokemon => {
        console.log( pokemon )
    })
    // nota: https é a versão segura de http, tanto é que os navegadores estão chamando sites em http de "não seguros"
}

const slide_5 = url_e_method => {

    // url e method
    // Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

    const url = 'https://jsonplaceholder.typicode.com/posts/'
    const options = {
        method: 'POST',
        headers: {
            "Content-types": "application/json; charset=utf-8",
        },
        body: '"aula": "JavaScript"'
    }

    fetch(url, options)
    .then( res => res.json() )
    .then( json => {
        console.log( json )
    })
}

const slide_6 = method => {

    // method

    // GET
    // Puxa informação, utilizado para pegar posts, usuários e etc.

    // POST
    // Utilizado para criar posts, usuários e etc.

    // PUT
    // Geralmente utilizado para atualizar informações.

    // DELETE
    // Deleta uma informação.
}

const slide_7 = GET => {

    // GET 
    // GET irá puxar as informações da URL. Não é necessário informar que o método é GET, porque este é o padrão.

    const url = 'https://jsonplaceholder.typicode.com/posts/'
    fetch( url, {
        method: 'GET'
    })
    .then( res => res.json() )
    .then( res => console.log( res ))
}

const slide_8 = POST => {

    // POST
    // POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no "headers" e utilizando o conteúdo do "body".


    const url = 'https://jsonplaceholder.typicode.com/posts/'
    fetch( url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
        body: '{"titulo": "JavaScript"}'
    })
    .then( res => res.json() )
    .then( res => console.log(res))
}

const slide_9 = PUT => {
    
    // PUT
    // PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.

    const url = 'https://jsonplaceholder.typicode.com/posts/'
    fetch( url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: '{"titulo": "JavaScript"}'
    })
    .then( res => res.json() )
    .then( res => console.log( res ))
}

const slide_10 = HEAD => {

    // HEAD
    // HEAD puxa apenas os headers. É uma requisição mais leve pois não púxa o body.

    const url = 'https://jsonplaceholder.typicode.com/posts/'
    fetch( url, {
        method: 'HEAD'
    })
    .then( res => {
        res.headers.forEach( console.log )
        console.log( res.headers.get( 'Content-Type' ))
    })
}

const slide_11 = Headers => {

    // Headers
    
    // Cache-Control
    // Tempo que o arquivo deve ficar em cache em segundos.
    // Ex: public, max-age = 3600

    // Content-Type
    // Tipo de conteúdo.
    // Ex: text/html; charset=utf-8. Indica o tipo de arquivo, principalmente em métodos POST e PUT.

    // Lista de Headers
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
}

const slide_12 = CORS => {
    
    // CORS
    // Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferentes origens.

    // É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

    // Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

    // CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável.

    const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com'
    const div = document.createElement('div')

    fetch( url )
    .then( res => res.text() )
    .then( res => {
        div.innerHTML = res
    })
}