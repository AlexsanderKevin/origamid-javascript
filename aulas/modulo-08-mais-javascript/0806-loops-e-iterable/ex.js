// Crie 4 li's na página.
// Utilizando o for...of adicione uma classe a cada li
const ul = document.querySelectorAll('li')
for(const li of ul){
    li.classList.add('umaClasse')
}

// Utilize o for...in para listar todas as propriedades e valores do objeto window
for(const prop in window){
    console.log(`${prop}: ${window[prop]}`)
}