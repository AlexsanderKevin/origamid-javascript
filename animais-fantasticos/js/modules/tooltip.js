export default function initTooltip() {
    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = `${event.pageY + 20}px`;
            // nota: os '20' adicionados servem para distanciar um pouco o tooltip
            // do mouse, evitando que o mouse passe por cima dele, gerando
            // comportamentos estranhos

            this.tooltipBox.style.left = `${event.pageX + 20}px`;
            // nota: o valor passado para uma propriedade CSS deve ser uma string
            // contendo valor e unidade de medida, como a propriedade 'event.
            // pageX' é um valor inteiro, deve-se concatenar a ele a unidade de
            // medida, transformando-o numa string reconhecivel
        },
    };

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();

            this.element.removeEventListener('mouseleave', onMouseLeave);
            // nota: aqui o evento é deletado, Deus sabe lá o porquê

            this.element.removeEventListener('mousemove', onMouseMove);
        },
    };
    // nota: é possível utilizar um objeto como callback de uma função de evento
    // desde que tal objeto tenha o método 'handleEvent()' dizendo o que deve
    // acontecer conforme chamado

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);

        return tooltipBox;
    }

    function onMouseOver() {
        const tooltipBox = criarTooltipBox(this);

        onMouseLeave.tooltipBox = tooltipBox;
        // nota: aqui é definido o 'tooltipBox' criado como valor para a
        // propriedade 'tooltipBox' do objeto 'onMouseLeave'

        onMouseLeave.element = this;

        this.addEventListener('mouseleave', onMouseLeave);
        // nota: aqui é passado um objeto como callback ao invés de um método

        onMouseMove.tooltipBox = tooltipBox;

        this.addEventListener('mousemove', onMouseMove);
    }

    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });
}
