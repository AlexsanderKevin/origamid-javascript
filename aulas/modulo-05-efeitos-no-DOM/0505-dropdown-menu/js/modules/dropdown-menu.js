export default function initDropdownMenu(){
    
}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
    }) // nota: para atribuir uma mesma função a varios eventos é possível atribuir tais eventos a um vetor e, para cada evento listado, aplicar o método.
})

function handleClick(event){
    event.preventDefault()
    this.classList.toggle('active')
}