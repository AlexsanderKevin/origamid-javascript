const slide_2 = json => {

    // JSON 
    // JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas "" são obrigatórias, tanto na chave quanto no valor, quando este for uma string.

    {
        "id": 1,
        "nome": "André",
        "email": "andre@origamid.com"
    }

    // nota: JSON não é interpretado apenas em JavaScript. Linguagens como Python, Ruby, etc. também possuem seus interpretadores JSON
}

const slide_3 = valores => {
    
    // Valores
    // Os valores podem ser números, strings, boolean, arrays, objetos e null.

    {
        "id": 1,
        "faculdade": true,
        "pertences": [
            "lapis",
            "caneta",
            "caderno"
            // nota: JAMAIS colocar a vírgula no ultimo item da array ou do objeto
        ],
        "endereço": {
            "cidade": "Rio de Janeiro",
            "pais": "Brasil"
        },
        "casado": null
    }
}

const slide_4 = Arrays_e_Objetos => {

    // Arrays e Objetos
    // É comum possuirmos arrais com objetos em cada valor da array.
    // Cuidado para não colocar vírgula no último item do objeto ou array.

    [
        {
            "id": 1,
            "aula": "JavaScript",
            "tempo": "25min"
        },
        {
            "id": 2,
            "aula": "HTML",
            "tempo": "15min"
        },
        {
            "id": 3,
            "aula": "CSS",
            "tempo": "10min"
        }
    ]
}

const slide_5 = JSON_parse_e_JSON_stringify => {
    

    // JSON.parse() irá transformar um texto JSON em um objeto.
    // JSON.stringify() irá transformar um objeto JavaScript em um string no formato JSON.

    const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}'
    const textoOBJ = JSON.parse(textoJSON)

    const enderecoOBJ = {
        cidade: "Rio de Janeiro",
        rua: "Ali Perto de Alcantara",
        pais: "Brasil",
        numero: 50
    }

    const enderecoJSON = JSON.stringify(enderecoOBJ)
}

const slide_6 = Exemplo_Real => {
    
    // Exemplo Real
    // Podemos guardar, por exemplo, no localStorage, uma string como valor de uma propriedade. 
    // E retornar essa string como um objeto.

    const configuracoes = {
        player: "Google API",
        tempo: 25.5,
        aula: "2-1 JavaScript",
        vitalicio: true,
    }

    localStorage.configuracoes = JSON.stringify(configuracoes)
    const pegarConfiguracoes = JSON.parse(localStorage.configuracoes)
}