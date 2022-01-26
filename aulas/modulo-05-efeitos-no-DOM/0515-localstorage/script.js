const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)

const handleStyle = {
    element: btn,
    texto(value){
        this.element.innerText = value
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value
        // nota: atributos e propriedades css que possuam hifen, tais como "background-color", no JavaScript são traduzidos para camelCased, tal como "backgroundColor"
    },
    color(value){
        this.element.style.color = value
    },
    height(value){
        this.element.style.height = value + 'px'
    },
    width(value){
        this.element.style.width = value + 'px'
        // nota: poder-se-ia mudar o input de height de "number" para "text", desta maneira seria possível especificar a unidade de medida (rem, px,vw, etc).
    },
    border(value){
        this.element.style.border = value
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value){
        this.element.style.fontFamily = value
    },
    fontSize(value){
        this.element.style.fontSize = value + 'pt'
    }
}

function handleChange(event){
    const property_name = event.target.name
    const value = event.target.value
    
    handleStyle[property_name](value) 
    // nota: O valor passado entre [colchetes] trata-se do método acessado dinamicamente, dessa maneira o método pode ser buscado de acordo com parametros da função handleChange().
    // Ex: handleStyle.method() -> não funcionaria (sendo "method" um parametro passado anteriormente e não um método de verdade)
    // A correção do exemplo acima seria: handleStyle[method]()
    //nota: parece não ser necessário o uso do ponto entre o nome do objeto e os [colchetes]
    showCss()
    saveValues(property_name, value)

    console.log(property_name, value)
}
function saveValues(name, value){
    localStorage[name] = value; // nota: mais uma vez os [colchetes] sendo utilizados para passar uma propriedade como parametro
}

function setValues(){
    const properties = Object.keys(localStorage) // nota: faz uma lista das chaves de propriedades do objeto "localStorage"
    properties.forEach(property => {
        handleStyle[property](localStorage[property])
        controles.elements[property].value = localStorage[property]
    })
    showCss()
}
setValues()

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
    // nota: nesse caso o "cssText" roxo é referente à constante à qual foi atribuído o elemento que vai mostrar os estilos aplicados no botão.
    // Já o "cssText" em branco se trata de uma propriedade do objeto "style" que todo elemento HTML possui.
}
