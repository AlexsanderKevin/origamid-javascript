const slide_2 =  Fetch_API  => {
    
    // Permite fazermos requisições HTTP através do método "fetch()".
    // Este método retorna a resolução de uma Promise.
    // Podemos, então, utilizar o "then" para interagirmos com a resposta, que é um objeto do tipo Response.

    fetch('./arquivo.txt').then(function(response) {
        console.log(response) // Response HTTP (Objeto)
    })
}

const slide_3 = Response => {
    
    // O objeto Response possui um corpo com o conteúdo da resposta.
    // Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response
    // Estes retornam outras promises.

    fetch('./arquivo.txt').then(function(response){
        return response.text() 
        // nota: "text()" é um método do protótipo de "Response" que transforma as propriedades e métodos do objeto Response em texto
    }).then(function(corpo){ // body
        console.log(corpo) // aqui será mostrado o texto contido dentro da propriedade "body", que corresponde ao que está escrito no arquivo em si.
    })
}

const slide_4 = Servidor_Local => {

    // O fetch faz uma requisição HTTP / HTTPS. Se voce iniciar um site local diretamente pelo index.html, sem um servodor local, o fetch não funcionará.

    fetch('c:/files/arquivo.txt')
    .then( res => res.text() )
    .then( corpo => console.log(corpo) ) // erro

    // Se desmos um espaço após o objeto ou pularmos linha, o método continua funcionando
}

const slide_5 = JSON => {

    // Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato de ele possuir basicamente a mesma sintaxe que um objeto js.
    // .json() transforma um corpo que esteja no formato json em um objeto JavaScript.

    fetch('https://viacep.com.br/ws/01001000/json/')
    .then( response => response.json() )
    .then( cep => {
        console.log(cep.bairro, cep.logradouro)
    })
}

const slide_6 = text => {

    // .text()
    // Podemos utilizar o .text() para diferentes formatos como: txt, json, html, css, js e mais.

    const styleElement = document.createElement('style')

    fetch('./style.css')
    .then( response => response.text() )
    .then( style => {
        styleElement.innerHTML = style
        document.body.appendChild(styleElement)
    })
}

const slide_7 = HTML_e_text => {

    // HTML e .text()
    // Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir daí podemos manipular esses dados como um DOM qualquer.

    const div = document.createElement('div')

    fetch('./sobre.html')
    .then( response => response.text() )
    .then( htmlBody => {
        
        div.innerHTML = htmlBody
        const titulo = div.querySelector('h1')
        document.querySelector('h1').innerText = titulo.innerText
    })
}

const slide_8 = blob => {
    
    // .blob()
    // Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens, por exemplo. O blob gera uma URL única.

    const div = document.createElement('div') 

    fetch('./imagem.png')
    .then(response => response.blob())
    .then(imgBlob => {
        const blobUrl = URL.createObjectURL(imgBlob)
        console.log(blobUrl)
    })
}

const slide_9 = clone => {

    // .clone()
    // Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso extiste o método .clone(), caso sejanecessário transformar uma resposta em diferentes valores.

    const div = document.createElement('div')

    fetch('http://viacep.com.br/ws/01001000/json/')
    .then( response => {
        const cloneResponse = response.clone()

        response.json().then(json => console.log(json))

        cloneResponse.text().then(text => console.log(text))
    })
}

const slide_10 = headers => {

    // .headers()
    // É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dadi uterável então podemos utilizar o forEach para vermos cada um deles.

    fetch('http://viacep.com.br/ws/01001000/json/')
    .then( response => {
        response.headers.forEach(console.log)
    })
}

const slide_11 = status_e_ok => {

    // .status e .ok
    // .status etorna o status da requisição. Se foi 404, 200, 202 e mais.
    // .ok retorna um valor booleano sendo "true" para uma requisição de sucesso e "false" para uma sem sucesso.

    fetch('http://viacep.com.br/ws/01001000/json/')
    .then( response => {
        console.log( response.status, response.ok)

        if( response.status === 404 )
            console.log('Página não encontrada')
    })
}

const slide_12 = url_e_type => {
    // .url e .type
    // .url retorna o url da requisiçãi.
    // .type retorna o tipo da resposta.

    fetch('http://viacep.com.br/ws/01001000/json/')
    .then( response => {
        console.log(response.type, response.url)
    } )

    // types
    // basic: feito na mesma origem // requisição no próprio servidor
    // cors: feito em url body pode estar disponível // conexão com outro servidor
    // error: erro de conexão
    // opaque: no-cors, não permite acesso de outros sites
}