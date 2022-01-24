// new Date()
    // O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computados.

    const agora = new Date() // O objeto é criado a partir do exato momento em que o script é executado.
    agora
    // Semana Mês Dia Ano HH:MM:SS GMT
    agora.getDate() // Dia
    agora.getDay() // Dida da Semana ex: 5 = Fri, 0 seria o domingo
    agora.getMonth() // Número do mês
    agora.getFullYear() // Ano
    agora.getHours() // Hora
    agora.getMinutes() // Minutos
    agora.getTime() // ms desde 1970
    agora.getUTCHours() - 3 // Brasília // nota: UTC é um padrão estipulado para horário, bom para ajustar horarios para diversos fusos

// getTime()
    // O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970
    agora.getTime()

    // total de dias desde 1 de janeiro de 1970
    const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000)

// Dias até
    // Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

    const promocao = new Date ('December 24 2018 23:59')

    function converterEmDias(time){
        return time / (24 * 60 * 60 * 1000)
    }

    const diasAgora = converterEmDias(agora)
    const diasPromocao = converterEmDias(promocao)

    const faltam = diasPromocao = diasAgora
