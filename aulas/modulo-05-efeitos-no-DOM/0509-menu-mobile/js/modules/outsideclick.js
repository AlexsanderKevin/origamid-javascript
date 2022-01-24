export default function outsideClick(element, events, callback){
    const html = document.documentElement
    const outside = 'data-outside' // nota: essa propriedade será utilizada para que seja possível saber se o elemento já possui o event listener

    if(!element.hasAttribute(outside)){
        events.forEach(userEvent => {
            setTimeout(()=>{
                html.addEventListener(userEvent, handleOutsideClick)
            }) // nota: o 'setTimeout()' é assíncrono, ou seja, entra para a call stack só depois do evento loop, sendo assim, este método será executado depois.
        })
        element.setAttribute(outside, '')
    } // nota: isso verifica se o elemento ja tem o event listener para não adicionar mais de um

    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside) // nota: esse atributo deve ser removido para que o event listener possa ser adicionado de novo depois
            events.forEach(userEvent => {
                html.removeEventListener('click', handleOutsideClick)
            })

            callback()
            // nota: isso remove o eventListener ao fechar o menu
        }
    }
}