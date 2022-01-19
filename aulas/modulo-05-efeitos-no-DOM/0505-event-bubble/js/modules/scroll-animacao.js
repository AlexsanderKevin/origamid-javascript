export default function initAnimacaoScroll(){

    const sections = document.querySelectorAll('[data-anime="scroll"')
    
    if(sections.length){
    
        const windowMetade = window.innerHeight * 0.6
        
        function animaScroll(){
        
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
        
                if(sectionTop <= windowMetade)
                    section.classList.add('ativo')
            })
        }
        animaScroll()
        
        window.addEventListener('scroll', animaScroll)
    }
}