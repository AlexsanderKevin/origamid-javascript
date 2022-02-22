const regexpCEP = /\d{5}[-\s]?\d{3}/g

const ceps = [
    '00000-000',
    '00000 000',
    '00000000'
]

for(const cep of ceps){
    console.log(cep, cep.match(regexpCEP))
}

const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g

const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000.000.000.00',
    '000000000-00',
    '00000000000'
]

for(const cpf of cpfs){
    console.log(cpf, cpf.match(regexpCPF))
}
console.log('----------------------------')

    const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g

    const cnpjs = [
        '00.000.000/0000-00',
        '00000000000000',
        '00-000-000-0000-00',
        '00.000.000./000000',
        '00.000.000.000000',
        '00.000.000.0000.00'
    ]

    for(const cnpj of cnpjs){
        console.log(cnpj, cnpj.match(regexpCNPJ))
    }