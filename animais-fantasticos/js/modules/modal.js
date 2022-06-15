export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        // bind this ao callback para fazer referencia ao objeto instanciado pela classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(event){
        event.preventDefault();
        this.toggleModal();
    }

    cliqueForaModal(event) {
        if (event.target === this.containerModal);
        // nota: nesse caso o 'this' faz referencia ao alvo da função que,
        // por acaso, será o container do modal
        this.toggleModal();
    }

    addModalEvents() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal); 
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }

        return this;
    }
}
