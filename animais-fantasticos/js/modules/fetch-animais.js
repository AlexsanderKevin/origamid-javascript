import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
    const numerosGrid = document.querySelector(target);

    // cria a div contendo informações com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');

        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

        return div;
    }

    // preenche cada animal no DOM
    function preencherAnimais(animal){
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    // Anima os numeros de cada animal
    function animaAnimaisNumeros(){
        const animaNumeros = new AnimaNumeros('[data-numero]','ativo', '.numeros');
        animaNumeros.init();
    }

    // puxa os animais atraves de um arquivo json e cria cada animal utilizando a função createAnimal()
    async function criarAnimais() {
        try {
            // faz o fetch e espera a resposta
            const animaisResponse = await fetch(url);
            // transforma a resposta em json
            const animaisJSON = await animaisResponse.json();

            // Apos a transformação do json, ativa as funçõespara preencher e animar os numeros.
            animaisJSON.forEach(animal => preencherAnimais(animal));
            animaAnimaisNumeros();

        } catch (erro) {
            console.log(Error(erro));
        }
    }

    return criarAnimais();

    //fetchAnimais('./animaisapi.json');
}
