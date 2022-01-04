// Clonar Elementos
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método:
// cloneNode()

const TITULO = document.querySelector('h1')
const TITULO_2 = document.querySelector('h1')
const NOVO_TITULO = TITULO
// TITULO, TITULO_2 E NOVO_TITULO são iguais e referem-se literalmente ao mesmo elemento, se um for modificados, todos o são

const CLONE_TITULO = TITULO.cloneNode(true) // o valor booleano passado como argumento do métodod 'cloneNode()' indica se os filhos do elemento alvo serão clonados também, sendo true para sim e false para não
const CONTATO = document.querySelector('.contato')
CONTATO.appendChild(CLONE_TITULO)