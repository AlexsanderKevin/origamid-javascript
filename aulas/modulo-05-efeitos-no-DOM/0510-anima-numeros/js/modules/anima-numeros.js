export default function initAnimaNumeros(){

    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]')
        
        numeros.forEach(numero => {
            const total = +numero.innerText
            const incremento = Math.floor(total / 100)
            let start = 0
        
            const timer = setInterval(() => {
                start += incremento
                numero.innerText = start
        
                if(start >= total){
                    numero.innerText = total
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        })
    }
    
    function handleMutation(mutation){ // nota: o parametro 'mutation' ja tem um valor estabelecido, de maneira parecida com o parametro 'event' em outras funções. Nesse caso, 'mutation' corresponde a um Array Like chamada [MutationRecord] com todas as mutações que o elemento alvo recebeu.
    
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect() // nota: o observador é desconectado para não disparar a função 'animaNumeros()' varias vezes ao mesmo tempo.
            animaNumeros()
        }
    }
    
    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation)
    
    observer.observe(observerTarget, {attributes: true})
}
