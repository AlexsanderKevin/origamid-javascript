// Novos Elementos
// podemos criar novos elementos com o método:
// createElement()

const animais = document.querySelector('.animais')

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo')

animais.appendChild(novoH1)