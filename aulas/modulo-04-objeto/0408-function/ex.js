// Retorne a soma total de caracteres dos parágrafos acima utilizando o reduce()
const paragrafos = document.querySelectorAll('p')
const caracteres = Array.prototype.reduce.call(paragrafos, (acc, p) => { // nota: não esquecer de atribuir a uma variavel
    const characters = p.innerText.length
    return acc + characters
}, 0) // nota: não esquecer de passar o valor inicial

console.log('1 - Soma: ', caracteres)

// Crie uma função que retorne novos elementos html, com os seguintes parametros: tag classe e conteudo
const newElement = (tag, classe, conteudo) => {
    const elemento = document.createElement(tag)
    // elemento.classList.add(classe)
    classe ? elemento.classList.add(classe) : null // isso verifica se foi passado um parametro de 'classe' e ignora-o caso não tenha sido
    // elemento.innerHTML = conteudo
    conteudo ? elemento.innerHTML = conteudo : null
    
    return elemento
}

// Crie uma nova função utilizando a anterior como base. Essa nova função deverá sempre criar um h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newTitle = newElement.bind(null, 'h1', 'title') // nota: nesse caso o 'null' é ogual a 'window'
const title = newTitle('Tralalalalalalal')
console.log(title)