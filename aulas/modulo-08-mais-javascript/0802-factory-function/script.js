// function createButton(text){ function element(){
//         const buttonElement = document.createElement('button')
//         buttonElement.innerText = text
//         return buttonElement
//     }
//     return{
//         text,
//         element
//     }
// }

// const btnComprar = createButton('Comprar')
// const btnVender = createButton('Vender')

// function criarPessoa(nome, sobrenome){
//     const nomeCompleto = `${nome} ${sobrenome}`

//     function andar(){
//         return `${nomeCompleto} andou`
//     }
//     function nadar(){
//         return `${nomeCompleto} nadou`
//     }

//     return {
//         nome,
//         sobrenome,
//         andar,
//         nadar
//     }
// }

// const kevin = criarPessoa('Kevin', 'Alexsander')

function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements)

    function on (onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        })
        // return $$(selectedElements)
        return this
    }
    function hide(){
        elements.forEach(element => {
            element.style.display = 'none'
        })
        // return $$(selectedElements)
        return this
    }
    function show(){
        elements.forEach(element => {
            element.style.display = 'initial'
        })
        // return $$(selectedElements)
        return this
    }
    return {
        elements,
        hide,
        show,
        on,
    }
}

const btns = $$('button')

function handleClick(event){
    console.log('clicou')
}
btns.on('click', handleClick)
