// Utilizanod o forEach no array abaixo, some os valores de Taxa e os valores de recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 49'
    },
]

let acum  = 0
transacoes.forEach(transacao => {
    const value = Number(transacao.valor.slice(3))

    acum += value
    console.log(
        acum
    )
})

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

// retorne o último caracter da frase 
const frase = 'Melhor do ano!'

// retorne o total de taxas
const transacoes2 = ['Taxa do Banco', 'TAXA DO PÃO', '  taxa do Mercado']