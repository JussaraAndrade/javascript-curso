// recebe tudo como um array: ...numeros
let adicionarNumeros = (...numeros) => {
    console.log(numeros);
}

// recebe tudo como um array: nomes
let adicionarNome = (...nomes) => {
    console.log(nomes);
}


let adicionar = (nomes, ...novosNomes) => {
    
    let novoConjunto = [
        ...nomes, // operador spread
        ...novosNomes // operador spread
    ];

    return novoConjunto;
}

let nomes = ["Paulo", "Gustavo"];

adicionarNumeros(5, 6, 7, 8, 9, 10, 12, 13, 14);
adicionarNome('Thomaz', 'Maria', 'Eduarda', 'José');

let outros = adicionar(nomes, "Francisco", "Vitória");

console.log(outros);