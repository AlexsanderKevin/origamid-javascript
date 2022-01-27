const promessa = new Promise((resolve, reject) => { // nota: "resolve" é um argumento como qualquer outro, popdendo ter qualquer nome
    let condicao = false
    
    if(condicao){

        resolve({nome: "Kevin", idade: 19}) 
    }else{

        reject(Error('Um erro ocorreu na promise')) // nota: isso induz o console a gerar um erro com a mensagem escrita. (deve ser bom para debuging)
    }
})

// promessa.then(resolve => console.log(resolve))
// nota: a condição passada aqui sempre dirá a respeito da condição de resolve, portanto mesmo mudando seu nome, o código será executado apenas caso a promessa seja resolvida.

const retorno = promessa
.then(resolucao => {
    resolucao.profissao = 'Fodido'
    return resolucao
})
.then(resolucao => console.log(resolucao))
.catch(rejeitada => console.log(rejeitada))
// nota: da maneira descrita acima o erro é retornado como uma string ao invés de um erro de fato, todo em vermelho. Isso é bom porque indica o erro mas deixando claro que foi um erro premeditado e não uma falha real no código.
.finally(()=> console.log('Acabou!'))

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('usuário logado')
    }, 1000)
})

const dados = new Promise (resolve => {
    setTimeout(() => {
        resolve('dados carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then(resolucao => console.log('todos: ' + resolucao)) // loga uma array com os RESULTADOS das promises

const carregouPrimeiro = Promise.race([login, dados])

carregouPrimeiro.then(resolucao => console.log('Primeiro: ' + resolucao))
// nota: vale comentar o assincronismo em relação ao fato de que a constante 'carregouPrimeiro' aparece antes, no console, do que o 'carregouTudo', mesmo tendo sido declarado depois.
// Certamente isso acontece porque, enquanto o 'carregouPrimeiro' retorna um valor assim que o mais rapido seja executado, o 'carregouTudo' retorna valores apenas após ambos terem sido carregados