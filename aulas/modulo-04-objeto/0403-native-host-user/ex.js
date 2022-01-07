// Liste 5 objetos natvos
Array
String
Function
Number
Boolean

// liste 5 objetos do browser
HTMLCollection
NodeList
HTMLElement
Document
Window

// liste 2 métodos, propriedades ou objetos presentes no chrome que não estão no firefox

if (typeof document.onwebkitanimationend !== "undefined")
    console.log('Existe');
else
    console.log('Não existe') // esta função serve para verificar se a funcionalidade alvo existe no browser que está sendo utilizado 