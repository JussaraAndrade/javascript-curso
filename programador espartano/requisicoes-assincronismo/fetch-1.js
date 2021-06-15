let loadPosts = () => {

    document.getElementById('posts').innerHTML = 'Carregando...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((resultado) => {
            // retorna como json
            return resultado.json();
        })
        .then((json) => {
            document.getElementById('posts').innerHTML = json.length+ ' posts';
        })
        .catch((error) => {
            console.log("Deu problema!");
        });
}