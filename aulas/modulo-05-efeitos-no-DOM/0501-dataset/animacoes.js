function initTabNav(){

    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo')
    
        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove('ativo')
            })
            const direcao = tabContent[index].dataset.anime
            tabContent[index].classList.add('ativo', direcao)
        }
        
        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', ()=> activeTab(index))
        })
    }
}
initTabNav()

function initAccordion () {

    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'

    if(accordionList.length){
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)
        
        function activeAccordion(){
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }
        
        accordionList.forEach(item => item.addEventListener('click', activeAccordion))
    }
}
initAccordion()

function initScrollSuave(){

    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
    
    function scrollToSection(event){
        event.preventDefault()
    
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
    
        section.scrollIntoView({ // this puts the target element into user's view
            behavior: 'smooth', // this sets how the transition will behave
            block: 'start', // this sets where exactly the view will stop from target component
        })
    }
    
    linksInternos.forEach(link => 
        link.addEventListener('click', scrollToSection)
    )
}
initScrollSuave()

function initAnimacaoScroll(){

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
initAnimacaoScroll()