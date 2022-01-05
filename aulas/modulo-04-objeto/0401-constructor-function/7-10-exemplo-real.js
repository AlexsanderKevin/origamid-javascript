// Exemplo Real
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos

// objeto
// const Dom = {
//     seletor = 'li',
//     element(){
//         return document.querySelector(this.seletor)
//     },
//     ativo(){
//         this.element().classList.add('ativo')
//     },
// }
// Dom.ativo() // adiciona ativo ao li
// Dom.seletor = 'ul'
// Dom.ativo() // adiciona ativo ao ul

// constructor 
function Dom (seletor) {
    this.seletor = seletor
    this.element = function() {
        return document.querySelector(this.seletor)
    }
    this.ativo = function() {
        this.element().classList.add('ativo')
    }
}
const li = new Dom('li')