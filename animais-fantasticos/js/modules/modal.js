export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
        if (event.target === this);
        // nota: nesse caso o 'this' faz referencia ao alvo da função que,
        // por acaso, será o container do modal
        toggleModal(event);
    }
    if (botaoAbrir && botaoFechar && containerModal) {
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}
