let nome1 = 'Jussara Andrade';
let frase = 'Eu gosto de carros';
let nome2 = 'Thomaz';

// Inserir Jussara e Substituir por Thomaz
let resultado1 = nome1.replace('Jussara', 'Thomaz');

let resultado2 = frase.replace('carros', 'motos');

// letra maiusculas
let letraMaius = nome1.toUpperCase();

// letra minusculas
let letraMinus = nome1.toLowerCase();

let concatena1 = nome2.concat(' ', 'Henrique');
let concatena2 = nome2+ ' Henrique';

// funções muito úteis
let nome3 = 'Maria';
// remove os espaços
let resultado3 = nome3.trim(); 

// qual é o caracter que está na posição 3
let resultado4 = nome3.charAt(0);
// tem essa outra função substr() que faz a mesma coisa charAt() 
resultado4.substr(3, 1);

// ECMAScript 5
let resultado5 = nome1[2]; // consegue acessar a posição do caracter da string

let resultado6 = nome1.split(' ');

// divide e transforma em array
let array = '1,2,3,4,5,6,7,8,9,10';
let resultado7 = array.split(',');

// divide e transforma em array
let receita = 'ovo;massa;corante;farinha';
let resultado8 = receita.split(';');


// console.log("split(;): " resultado8);
// console.log("split(,): " resultado7);

// console.log("acessa pela posição: " +resultado5);
// console.log("split(): " +resultado6);

// console.log("trim(): " +resultado3);
// console.log("charAt(): " +resultado4);

// console.log(concatena1);
// console.log(concatena2);
// console.log(letraMaius);
// console.log(letraMinus);

// console.log("resultado: ", resultado1);
// console.log(resultado2);
// console.log("nome: ", nome);