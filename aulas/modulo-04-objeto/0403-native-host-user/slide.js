// 2-10
    // Native 
        // Objetos matovps são aqueles definidos na especificação da linguagem e são implementados independente do host.

// Construtores de objetos nativos
Object
String
Array
Function


// 3-10 
    // Host
        // Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLcolection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser

// Objetos do browser
NodeList
HTMLCollection
Element


// 4-10
    // User
        // Objetos do user, são os objetos definidos pelo seu aplicaco. Ou seja, qualquer obje você criaou que importar de alguma biblioteca externa

        const Pessoa = {
            nome: 'Kevins'
        }


// 5-10
    // Diferentes Versões
        
        // Browsers Diferentes
            // Apesar de tentarem ao máximo manter um padrão, browsers diferents possuem objetos com propriedades e métodos diferentes.
        
        // Versões de browsers
            // Sempre que um browser for atualizado, novos objetos, métodos e propriedades podem ser implementados

        // Host e Native Objects
            // Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método 'find()' de Array    


// 6-10
    // Versões de Javascript

        // ECMA
            // Organização responsável por definir padrões para tecnologias. ECMAScript é p ádrão de Javascript

        // ECMAScript 2015 ou ES6
            // ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da ES6, exite uma tendência anual de atualizações. ECMAScript 2015, 2016, 2017 ... e Next.
        
        // Engine
            // Existem diversas engines que implementam o ECMAScript como V8, SpiderMonkey, Chakra, JavaScriptCore e mais.


// 7-10
    // Bibliotecas
        // Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas tirna as mesmas obsoletas.

        $('a').addClass('ativo')
        $('a').hide()
        $('a').show()


// 8-10
    // Verificar se Existe
        // O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar 'undefined'. Ou seja, quando não for 'undefined' quer dizer que existe.

        if(typeof Array.from !== "undefined")
        if(typeof NodeList !== "undefined");

// 9-10 
    // API
            // Application Programming Interface, é uma interface de softwate criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindi com a API do browser