// Duplicate the menu and add it to copy
const MENU = document.querySelector('.menu')
const COPY = document.querySelector('.copy')

const MENU_CLONE = MENU.cloneNode(true)
COPY.appendChild(MENU_CLONE)

// Select the first DT from the FAQ's DL
const FAQ = document.querySelector('.faq dl')
const FIRST_DT = FAQ.children[0]

// Select the first DT's DD 
const FIRST_DD = FAQ.children[1]

// Substitute the html content from .faq for .animais's
const ANIMAIS = document.querySelector('.animais').innerHTML
const FAQ_2 = document.querySelector('.faq').innerHTML

FAQ.innerHTML = ANIMAIS