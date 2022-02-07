const History = slide_2 => {

    // History
    // É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.

    window.history
    window.history.back() // vai para a anterior
    window.history.forward() // vai para a próxima
}

const pushState = slide_3 => {

    // pushState()
    // A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item.
    // window.history.pushState(obj, title, url)

    // Em obj podemos enviar um objeto com dados, mas seu uso é restrito.
    // Por isso  geralmente utilizamos "null".
    // O title ainda é ignorado por alguns browsers, também utilizamos "null" nele.
    // O URL que é a parte importante.

    window.history.pushState(null, null, 'sobre.html')
}

const popstate = slide_4 => {

    // popstate
    // O evento "popstate" pode ser adicionado ao objeto "window". Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ao  próximo.

    window.addEventListener('popstate', () => {
        fetchPage(window.location.pathname)
    })
}

const Fetch_e_History = slide_5 => {

    // Fetch e History
    // Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar "fetch" com "history" apo conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

    async function fetchPage(url) {
        const pageResponse = await fetch(url)
        const pageText = await pageResponse.text()
        window.history.pushStaet(null, null, url)
    }
}