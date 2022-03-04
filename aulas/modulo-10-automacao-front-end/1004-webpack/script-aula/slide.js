const Webpack = slide_2 => {

    // Webpack

    // Bundler
        // Agrupa / processa diversos arquivos e otimiza os mesmos.

    // Altamente configurável
        // Por isso é complexo.

    // https://webpack.js.org
}

const Webpack_Instalação = slide_3 => {

    // Webpack

    // $ npm install --save-dev webpack webpack-sli
        // Instala o webpack e a cli do mesmo. Ter package.json antes

    // $ npx webpack ./js/script.js -o ./main.js
        // Vai agrupar todos os códigos, otimizaae, etc. Utilizar o "npx" é a mesma coisa que utilizar "node_modules/.bin/webpack". Facilita para utilizarmos cli's instaladas localmente ao invés de globalmente
}

const NPM_scripts = slide_4 => {

    // NPM Scripts

    // Permite definirmos uma linha de comando inteira, que será ativada com "nom run <nomeDoScript>". Não é preciso utilizar o "npx"

    {
        "scripts": {
            "dev": "webpack --mode development --watch ./js/script.js -o ./main.js",
            "build": "webpack --mode productino ./js/script.js -o ./main.js"
        }
    }

    // --mode define o modo da compilação
    // --watch define se deve ficar observando
}

const Scripts_Externos = slide_5 => {

    // Scritps Externos

    // Podemos facilmente importar scripts externos instalando os mesmos através do NPM e utilizando o Webpack para fazer obundler final.

    // $ npm install jquery
    // $ npm install lodash

    import $ from 'jquery'
    import _ from 'lodash'

    $('nav').hide()

    _.difference(['Banana', 'Morango', 'Uva'], ['Banana', 'Morango']) // uva
}