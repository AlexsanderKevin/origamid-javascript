export default class Tooltip {
    constructor(tooltips){
        this.tooltips = document.querySelectorAll(tooltips);
        
        // bind this
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseMove(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        // nota: os '20' adicionados servem para distanciar um pouco o tooltip
        // do mouse, evitando que o mouse passe por cima dele, gerando
        // comportamentos estranhos

        if (event.pageX + 240 > window.innerWidth){
            this.tooltipBox.style.left = `${event.pageX - 190}px`;

        } else {
            this.tooltipBox.style.left = `${event.pageX + 20}px`;
            // nota: o valor passado para uma propriedade CSS deve ser uma string
            // contendo valor e unidade de medida, como a propriedade 'event.
            // pageX' é um valor inteiro, deve-se concatenar a ele a unidade de
            // medida, transformando-o numa string reconhecivel
        }

    }

    onMouseLeave({ currentTarget }) {
        this.tooltipBox.remove();

        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        // nota: aqui o evento é deletado, Deus sabe lá o porquê

        currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
    // nota: é possível utilizar um objeto como callback de uma função de evento
    // desde que tal objeto tenha o método 'handleEvent()' dizendo o que deve
    // acontecer conforme chamado

    criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);

        this.tooltipBox = tooltipBox;
    }

    onMouseOver({ currentTarget }) {
        this.criarTooltipBox(event.currentTarget);

        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        currentTarget.addEventListener('mousemove', this.onMouseMove);

        //onMouseLeave.tooltipBox = tooltipBox;
        // nota: aqui é definido o 'tooltipBox' criado como valor para a
        // propriedade 'tooltipBox' do objeto 'onMouseLeave'

        //onMouseLeave.element = this;
        // nota: aqui é passado um objeto como callback ao invés de um método

        //onMouseMove.tooltipBox = tooltipBox;
    }

    addTooltipsEvent(){
        this.tooltips.forEach((item) => {
            item.addEventListener('mouseover', this.onMouseOver);
        });
    }

    init(){
        if (this.tooltips.length){
            this.addTooltipsEvent();
        }

        return this;
    }
}
