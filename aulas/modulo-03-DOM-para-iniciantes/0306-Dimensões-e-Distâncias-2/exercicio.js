//verificar a distancia da primeira imagem em relação ao topo da página
const firstImg = document.querySelector('img')
console.log(firstImg)
console.log('Top distancy: ', firstImg.offsetTop)

// returning the sum of all img's width
console.log('-------------------------')
const allImg = document.querySelectorAll('img')
let soma = 0

for(let i = 0; i < allImg.length; i++){
    soma = soma + (allImg[i].clientWidth)
}
console.log('unit: ', firstImg.clientWidth)
console.log('soma: ', soma)

// verify if page's links have the minimum width to touch-screen users (48pr/48pr accourding to google)
console.log('-------------------------')
const links = document.querySelectorAll('a')
console.log('links: ', links.length)

links.forEach((link, index) => {

    if(link.offsetWidth <= 48){
        console.log(link, index, ' is propper')
    }
})

// if browser's width <= 720pr, adda 'menu-mobile' class to the menu
console.log('-------------------------')

const browser_min_width = window.matchMedia('(max-width: 720px)')
const menu = document.querySelector('.menu')

if(browser_min_width.matches){
    console.log('mobile')
    menu.classList.add('menu-mobile')
}