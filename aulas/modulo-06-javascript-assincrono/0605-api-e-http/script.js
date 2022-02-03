fetch('https://pokeapi.co/api/v2/pokemon')
.then( res => res.json() )
.then( pokemon => {
    console.log( pokemon.results[7].name )
})

const url = 'https://jsonplaceholder.typicode.com/posts/'
const options = {
    method: 'POST',
    headers: {
        "Constent-Type": "application/json; charset=utf-8"
    },
    body: '{"title": "JavaScript"}',
}

fetch(url, options)
.then( response => response.json() )
.then( json => console.log( json ))