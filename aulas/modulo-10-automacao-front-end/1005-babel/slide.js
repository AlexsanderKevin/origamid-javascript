const Babel = slide_2 => {

    // Babel

    // Compilador
    // Transforma código novo em código antigo. Ex: const nome = 'Andre' vira var nome = 'Andre'

    // Browser Suporte
    // Para que um browser possa suportar algo novo de JavaScript é preciso que ele esteja atualizado, mas nem todo usuário possui a última versão do browser instalada

    // Can I Use
    // O site https://caniuse.com/ mostra em quais browsers a novidade está disponível ou não.
}

const Polyfill_vs_Transpiler = slide_3 => {

    // Polyfill vs Transpiler

    // Polyfill
    // Cria métodos / funções com o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem API.

    // Transpiler
    // Transforma código novo em código antigo. Ou seja, transforma "const" em "var".
}

const Instalar_Babel = slide_4 => {

    // Instalar Babel

    // https://babeljs.io/docs/en/usage

    // $ npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader
}