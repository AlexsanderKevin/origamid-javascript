// add 'click' class by clicking in the internal links
// remove 'click' class from other links
// prevent default behavior of these links
const links = document.querySelectorAll('a[href^="#"')

const activateLink = event => {
    event.preventDefault()

    links.forEach(link => link.classList.remove('active'))
    event.target.classList.add('active')
}

links.forEach(link => link.addEventListener('click', activateLink))

// get all elements starting with body and, by clicking, show exactly which elements are being clicked
const body = document.querySelectorAll('body *')
const show_me = event => console.log(event.target)
body.forEach(element => element.addEventListener('click', show_me))

// still using the last code, instead of showing in the console, remove the clicked element with the remove() method
const remove_element = event => event.target.remove()
body.forEach(element => element.addEventListener('click', remove_element))


// increase the font size by pressing the "t" key
const increase_font = event => {
    if(event.key === 'f'){
        body.classList.add('big-font')
    }
}
window.addEventListener('keypress', increase_font)