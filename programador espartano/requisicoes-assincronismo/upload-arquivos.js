let enviar = async () => {
    // files[0]; pega primeiro da lista
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    // upload do arquivo
    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}