let timer;
rodar = () => {
    timer = setTimeout(() => {
        document.querySelector('.demo').innerHTML = 'Rodou!';
    }, 2000);
}

parar = () => {
    clearTimeout(timer);
}

