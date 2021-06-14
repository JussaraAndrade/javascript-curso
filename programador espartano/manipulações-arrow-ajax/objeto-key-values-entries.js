let lista1 = [1,2,3,4];
let lista2 = {nome: 'Ricardo', idade: 29};

console.log(typeof lista1);
console.log(typeof lista2);

let lista = ['ovo', 'macarrão', 'feijão', 'pipoca'];

// pega os indices
console.log( Object.keys(lista) );

// pega os valores
console.log( Object.values(lista) );

// criar um array
console.log( Object.entries(lista) );

let pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Rosa',
    idade: 28
};

// irá retornar todas as chaves
// uma das opções para ler o objeto e debugar o código
console.log( Object.keys(pessoa) );
console.log( Object.values(pessoa) );
console.log( Object.entries(pessoa) );
