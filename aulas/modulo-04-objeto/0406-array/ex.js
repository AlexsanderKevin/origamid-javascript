const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']
// Remova o primeiro valor de comidas e coloque em uma variável
console.log('1--------------------')
console.log(comidas)
const primeiraComida = comidas.shift()
console.log(comidas)
console.log(primeiraComida)

// Remova o último valor de comidas e coloque em uma variável
console.log('2--------------------')
const ultimaComida = comidas.pop()
console.log(ultimaComida)
console.log(comidas)

// Adicione 'Arroz' ao final da array
console.log('3--------------------')

comidas.push('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao inicio da array
console.log('4--------------------')

comidas.unshift('Peixe', 'Batata')
console.log(comidas)

//--------------------------------------------------------------------------
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']
// Arrume os estudantes em ordem alfabética
console.log('5--------------------')

estudantes.sort()
console.log(estudantes)

// Inverta a ordem dos estudantes
console.log('6--------------------')

estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes
console.log('7--------------------')

if(estudantes.includes('Joana')){
    console.log('Inclui')
}else{
    console.log('Não Inclui')
}
// Verifique se Juliana faz parte dos estudantes 
console.log('8--------------------')

if(estudantes.includes('Juliana'))
    console.log('Inclui')
else 
    console.log('Não Inclui')

//-------------------------------------------------------------------------------
const html = `
<section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
</section>
`
// Substitua 'section' por 'ul' e 'div' por 'li' utilizando split() e join()
console.log('9--------------------')

const htmlArray1 = html.split('section')
const htmlWithUl = htmlArray1.join('ul')
console.log(htmlWithUl)

const htmlArray2 = htmlWithUl.split('div')
const htmlWithLi = htmlArray2.join('li')
console.log(htmlWithLi)

// -------------------------------------------------------------------------------
const carros7 = ['Ford', 'Fiat', 'VW', 'Honda']
// Remova o último carro, mas antes de remover, salve a array original em outra variável
console.log('10-------------------')

const arraySalvo = carros7.slice()

console.log(carros7.pop())
console.log(carros7)
console.log(arraySalvo)