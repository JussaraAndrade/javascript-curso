let loadPosts = () => {

    document.getElementById('posts').innerHTML = 'Carregando...';

    // requisição
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resultado) => {
            // retorna como json
            return resultado.json();
        })
        .then((json) => {
            montarBlog(json);
        })
        .catch((error) => {
            console.log("Deu problema!");
        });
}

let montarBlog = (lista) => {
    let html = '';

    for(let i in lista) {
        html += '<h3>' +lista[i].title+'</h3>';
        html += lista[i].body+"</br>";
        html += '</hr>';
    }

    document.getElementById('posts').innerHTML = html;
}