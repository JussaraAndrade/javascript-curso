// formato json
let pessoa1 = {
    nome: 'Thomaz',
    idade: 18
};

console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1);

let pessoa2 = {
    nome: 'Thomaz',
    idade: 18,
    caracteristicas: ['sorridente', 'maravilhoso', 'top']
};

console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.caracteristicas[1]);

let pessoa3 = { nome: 'Thomaz', idade: 18,  estetica: { altura: 900, peso: 10 }};

console.log(pessoa3.nome);
console.log(pessoa3.idade);
console.log(pessoa3.estetica);
console.log(pessoa3.estetica.peso);

