// Forms
    // É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
    <forms name="contato" id="contato">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome"></input>

        <label for="email">Email</label>
        <input type="email" name="email" id="email"></input>
        
        <label for="mensagem">Mensagem</label>
        <textarea name="mensagem" id="mensagem"></textarea>
    </forms>
    // nota: textarea não é um input

    document.forms // lista com os formulários
    document.forms.contato // form com o nome contato // nota: a propriedade 'name' do formulario faz referencia a isso daqui
    document.forms.contato.elements // elementos (do formulário ?) 
    // nota: isso puxa apenas os elementos que possuem algum valor no formulario, ou seja, não puxa as tags <label></label>
    document.forms[0].elements[0].value // valor do primeiro elemento, do primeiro formulário

// Values
    // A propriedade "value" retorna o valor do elemento no formulário.
    // Se adicionarmos um callback ao evento "keyup" (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar.
    // "change" dispara quando houver mudança no valor.

    const form = document.getElementById('contato')
    function handleKeyUp(event){
        console.log(event.target.value)
    }
    document.addEventListener('keyup', handleKeyUp)

    // nota: o "keyup" é bom para pegar os valores conforme são digitados, imediatamente, uma vez que o "change" só dispara quando o foco sai do input alvo.
    // o problema com o "keyup", no entanto, é não dar suporta a comando de vox, uma vez que é um evento APENAS de teclado.

// Validação
    // O método "checkValidity" verifica se um input com o atributo "required" é valido ou não. A propriedade "validationMessage" possui uma mensagem padrâo de erro do browser. É possível modificar com "setCustomValidity('')"
    // <input class="email" name="email" id="email" required></input>
    // <span class="carro"></span>

    const form = document.getElementById('contato')
    function handleChange(event){
        const target = event.target

        if(!target.checkValidity()){ // nota: retorna um booleano referente ao status de válido ou não
            target.classList.add('inválido')
            target.nextElementSibling.innerText = target.validationMessage // nota: isso faz referencia ao "<span></span>" depois do "<input>"

        }else{
            target.classList.remove('invalido')
        }
    }

// Select 
    <select name="cores" id="cores">
        <option value="black">Preto</option>
        <option value="white">Branco</option>
        <option value="blue">Azul</option>
    </select>

    const form = document.getElementById('contato')
    
    function handleChange(event){
        document.body.style.backgroundColor = event.target.value
    }
    form.addEventListener('change', handleChange)

// Diferentes Inputs
    // <input type="color"> // abre uma paleta de cores padrão do browser
    // <input type="date">
    // <input type="number">
    // <input type="range">
    // <input type="password">

    const form = document.getElementById('contato')

    function handleChange(event){
        console.log(event.target.value)
    }
    form.addEventListener('change', handleChange)

// Checkbox 
    // Retorna um valor de "value" booleano dependendo se estiver "checked" ou não

// Radio 
    // A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo "name"

// Pegando todos os valores
    // Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário

    // <forms name="contato" id="contato">
    //     <label for="nome">Nome</label>
    //     <input type="text" name="nome" id="nome"></input>

    //     <label for="email">Email</label>
    //     <input type="email" name="email" id="email"></input>
        
    //     <label for="mensagem">Mensagem</label>
    //     <textarea name="mensagem" id="mensagem"></textarea>
    // </forms>

    const form = document.getElementById('contato')
    const dados = {}

    function handleChange(event){
        dados[event.target.name] = event.target.value
    }