let azul = () => {
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

let vermelho = () => {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

let verde = () => {
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

let limpar = () => {
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}

let mostrarTelefone = (elemento) => {
    elemento.style.display = 'none';
    document.getElementById('telefone').style.display = "block";
}