// Mude a cor da tela para azul e depois para vermelho a cada 2s
const BODY = document.querySelector('body')

function blue_color(){
    BODY.style.background = 'blue'
    console.log('azul')
}
function red_color(){
    BODY.style.background = 'red'
    console.log('vermelho')
}

function init_psychodely(){
    setInterval(()=>{
        setTimeout(blue_color, 2000)
        setTimeout(red_color, 4000)
    }, 2000)
}

// init_psychodely()

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar)
const TIMER = document.querySelector('[data-time]')

const STOP = document.querySelector('[data-stop]')
let time = 0
const START = document.querySelector('[data-start]')

START.addEventListener('click', timer)

function timer(){
    const start_count = setInterval(()=>{
            time++
            TIMER.innerText = time
    }, 1000)

    function stop(){
        clearInterval(start_count)
        STOP.removeEventListener('click', stop)

        function reset(){
            time = 0
            TIMER.innerText = time

            STOP.removeEventListener('click', reset)
        }
        STOP.addEventListener('click', reset)
    }

    STOP.addEventListener('click', stop)
}


