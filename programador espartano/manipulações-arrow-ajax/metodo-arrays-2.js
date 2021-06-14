let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// remove o item do array - uso não recomendavel
// delete lista[1];

// splice(1, 1) - (a partir da posição do item 1, quero remover 1 item só)
/*
    lista.splice(0, 1) - remove a posição 0 - Ovo
    lista.splice(0, 1) - remove a posição 0 e 1 - Ovo e Farinha
    lista.splice(1, 2) - remove a posição 1 e 2 - Farinha e Corante
    lista.splice(1, 1) - remove a posição 1 - Farinha 
    lista.splice(3, 1) - remove a posição 3 - Massa 
*/

// remover com mais eficiencia
// lista.splice(3, 1);

// let lista2 = ['Prato', 'Liquidificador', 'Forno'];

// concatenar dois arrays - junta o item original com outros items
// let res = lista.concat(lista2);

// ordenar o array em ordem alfabética
// lista.sort();

// ordem alfabetica decrescente
lista.reverse();

let res = lista;


console.log(res);