// uso de async tem que tem que tá acompanhando de await, sem o await não funciona apresenta erros 
let loadPosts = async () => {

    document.getElementById('posts').innerHTML = 'Carregando...';

    // requisição /promise / await - espera o resultado
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    // transformou em json
    let json = await req.json();

    montarBlog(json);

    /*
    Modelo 2:

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
    */

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