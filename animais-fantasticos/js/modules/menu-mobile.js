import outsideClick from './outsideclick.js';

export default class MenuMobile {
    constructor(menuButton, menuList, eventos) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';

        if(eventos === undefined) this.eventos = ['click', 'touchstart'];
        else this.eventos = eventos

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.menuList.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);

        outsideClick(this.menuList, this.eventos, () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuButton.classList.remove(this.activeClass);
        });
    }

    addEvents(){
        this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
    }

    init(){
        this.addEvents();
        
        return this;
    }
}
