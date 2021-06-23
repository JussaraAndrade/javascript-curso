let subirTela = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
} 

let decidirBotaoScroll = () => {
    if(window.scrollY === 0) {
        //ocultar o botão
        document.querySelector('.scrollbutton').style.display = 'none';

    } else {
        // caso ao contrário; mostrar o botão.
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

//setInterval(decidirBotaoScroll, 1000)

// monitorando o scroll
window.addEventListener('scroll', decidirBotaoScroll)