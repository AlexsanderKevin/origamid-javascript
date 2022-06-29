export default class Funcionamento {
    constructor(semana) {
        this.funcionamento = document.querySelector(semana);
        this.activeClass = 'aberto'
    }

    dadosFuncionamento(){
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        // nota: passar o construtor 'Number' para o método .map() converte os
        // dados da string alvo para number.
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    }

    dadosAgora(){
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    }

    estaAberto(){
        const semanaAberto = this.diasSemana.includes(this.diaAgora);
        const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];

        return semanaAberto && horarioAberto;
    }

    abrir(){
        if (this.estaAberto()) {
            this.funcionamento.classList.add(this.activeClass);
        } else {
            this.funcionamento.classList.remove(this.activeClass);
        }
    }

    init(){
        this.dadosFuncionamento();
        this.dadosAgora();
        this.abrir();
        return this;
    }
}
