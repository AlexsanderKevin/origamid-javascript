import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2022 23:59:59 GMT-0300')
const tempoParaOAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300')

// console.log(diasParaONatal.days, ' dias')
// console.log(diasParaONatal.hours, ' horas')
// console.log(diasParaONatal.minutes, ' minutos')
// console.log(diasParaONatal.seconds, ' segundos')
console.log(tempoParaONatal.total.seconds)
setInterval(()=>{
    console.log(`${tempoParaOAnoNovo.total.days}:${tempoParaOAnoNovo.total.hours}:${tempoParaOAnoNovo.total.minutes}:${tempoParaOAnoNovo.total.seconds}`)
}, 1000)