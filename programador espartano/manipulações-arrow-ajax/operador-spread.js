// funciona tanto para array e objetos, e funciona também no vue e react

let numeros = [1,2,3,4];

// complementando a variaveis
let outros = [...numeros, 5,6,7,8];

console.log(outros);

let info = {
    nome: 'Thomaz',
    sobrenome: 'Pinheiro', 
    idade: 18
};

let novaInfo1 = {
    // operador spread: ...info
    ...info,
    cidade: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil" 
};

console.log(novaInfo1);

let adicionarInfo = (info) => {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'asdlkdjfslkdjlkj',
        data_cadastro: '....'
    };

    return novasInfo;
}

console.log(adicionarInfo({nome: 'Maria', sobrenome: 'Eduarda'}));
