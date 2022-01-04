// manipulando elementos
// é possivel mover elementos no DOM com métodos de Node
const LISTA = document.querySelector ('.animais-lista')
const CONTATO = document.querySelector('.contato')
const TITULO = CONTATO.querySelector('.titulo')

CONTATO.appendChild(LISTA) // move a lista para o final do elemento 'contato'titulo
CONTATO.insertBefore(LISTA, TITULO) // insere a lista antes do titulo, ou seja, o primeiro parametro é o item movido e o segundo, o ponto de referencia
CONTATO.removeChild(TITULO) // remove titulo de contato
CONTATO.replaceChild(LISTA, TITULO) // substitui titulo por lista, ou seja, o primeiro parametro refere-se ao item que será reposicionado, o segundo refere-se ao item que será substituido
