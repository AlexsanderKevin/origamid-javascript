import outsideClick from './outsideclick.js';

export default class DropdownMenu {
    constructor(dropdown, events) {
        this.dropdownMenus = document.querySelectorAll(dropdown);
        this.activeClass = 'active';
        // define 'touchstart' e 'click' como argumento padrão para 'events' caso o usuário não defina
        if (events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.activeMenu = this.activeMenu.bind(this);
    }

    // Ativa o dropdown menu e adiciona a função que observa o clique fora dele
    activeMenu(event) {
        event.preventDefault();
        const target = event.currentTarget;

        target.classList.add(this.activeClass);

        outsideClick(target, this.events, () => {
            this.classList.remove(this.activeClass);
        });
    }

    addMenuEvent(){
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeMenu);
            });
            // nota: para atribuir uma mesma função a varios eventos é possível atribuir tais eventos a um vetor e, para cada evento listado, aplicar o método.
        });
    }

    init(){
        this.addMenuEvent();

        return this;
    }
}
