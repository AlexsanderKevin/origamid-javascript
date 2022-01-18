// Módulos
    // Manutenção
        // Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção

    // Compartilhamento
        // O compartilhamento do código com outros projetos é facilitado, pois basta voca importar um módulo específico

    // Nativo no ES6+ 
        // Ferramentas que permitem dividirmos o código em módulos já existem ha bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.

// Modules ES6
    // Basta adicionar type="module" na tag 'script' do HTML. Utilize a palavra chave 'export' na frente do valor que deseja exportar (use default se for único). E 'import name from arquivo.js' para importar 

    // <script type="module" src="js/script.js"></script>

    // arquivo scroll-suave.js
    export default function scrollSuave(){
        ...
    }

    // arquivo script.js
    import scrollSuave from './scroll-suave.js'
    scrollSuave()

// Named Exports
    // Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

    // arquivo scroll.js
    export function scrollSuave(){
        ...
    }
    export function scrollAnimacao(){
        ...
    }

    // arquivo script.js
    import { scrollSuave, scrollAnimacao} from './scroll.js'
    scrollSuave()
    scrollAnimacao()

    // Importe todos os valores de um objeto
    import * as scroll from './scroll.js'
    scroll.scrollSuave()
    scroll.scrollAnimacao()

// Valores do Export 
    // Podemos exportar objetos, funções, classes, números, strings e mais.

    // arquivo configuracao.js
    export function scrollSuave(){}
    export const ano = 2000
    export const obj = {nome: 'Ford'}
    export const str = 'Frase'
    export class Carro {}
    
    // arquivo script.js
    import * as conf from './configuracao.js'
    conf.str
    conf.obj
    conf.ano

    // nota: componentes importados multiplas vezes são carregados apenas uma vez mas funcionam para dodos os importes

// Características 

    // Strict mode
        // 'user strict' por padrão em todos os arquivos

    // Variáveis ficam no module apenas
        // Não vazam para o escopo global
    
    // 'This' fora de um objeto faz referência a undefined
        // Ao invés de fazer referencia ao 'window'

    // Assíncrono

// use strict
    // O modo estrito previne algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo

    'use strict'

    nome = 'Ford' // erro, variável global
    delete Array.prototype // erro, não deletável
    window.top = 200 // erro, não pode mudar
    const arguments = 2.14 // escrever em palavra reservada

        // Por padrão todo module está no modo estrito