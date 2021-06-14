let lista = [45, 4, 9, 16, 25];
let lista2 = [];

let person = [
    {id: 1, nome: 'Thomaz', sobrenome: 'Henrique'},
    {id: 2, nome: 'Maria', sobrenome: 'XYZ'},
    {id: 3, nome: 'Fulano', sobrenome: 'De Oliveira'}
];

// retorna o primeiro item que achar
lista2 = lista.find((item) => {
    return (item == 16) ? true :  false;
});

// retorna a posição do item
lista2 = lista.findIndex((item) => {
    return (item == 16) ? true :  false;
});

let pessoa = person.find((item) => {
    return (item.id == 3) ? true : false; 
});

let res = lista2;
let res1 = pessoa;

console.log(res);
console.log(res1);