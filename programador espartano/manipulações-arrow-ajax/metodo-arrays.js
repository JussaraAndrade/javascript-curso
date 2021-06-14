let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// transforma o array em uma string 
let res1 = lista.toString();

// pega o array e transforma em string separando por traços (-) ou (',')
let res2 = lista.join(',');

// vai procurar na lista se existe o ingrediente
let res3 = lista.indexOf('Corante');

// pop(); ela remove último item do array
// lista.pop();

// shift(); ele remove o primeiro item
// lista.shift();

// adiciona um novo item do array
lista.push('Prato');

// alterar o valor na posição 0
lista[4] = 'Liquidificador';

// adicionar um item no final do array (não é recomendada)
lista [ lista.length ] = 'Liquidificador';


let res4 = lista;


console.log("toString(): " +res1);
console.log("join(','): " +res2);
console.log("indexof('Corante'): " +res3);
console.log("pop(): " +res4);
