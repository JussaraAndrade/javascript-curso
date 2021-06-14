// função de flecha


// Modelo 1
function somar1 (x, y){
    return x + y;
}

// Modelo 2
let somar2 = function(x, y) {
    return x + y;
}

// arrow; flecha '=>'
let somar3 = (x, y) => {
    return x + y;
} 

let somar4 = (x, y) => x+y;

console.log(somar1(10, 5));
console.log(somar2(20, 5));
console.log(somar3(30, 5));
console.log(somar4(40, 5));


// função com apenas um parametro
let letrasNoNome1 = (nome) => nome.length;
let letrasNoNome2 = nome => nome.length;

let letrasNoNome3 = nome => {
    let numero = nome.length;
    return numero;
};

console.log(letrasNoNome1('Thomaz'));
console.log(letrasNoNome2('Maria'));
console.log(letrasNoNome3('Eduarda'));

/*
Obs: function/arrow function; diferença é que um não tem o objeto this, o ideal é usar a function pq tem como usar this: function nome(){}
caso não usar this pode usar a função arrow function: let a = (x, y) => {return x + y} / let somar4 = (x, y) => x+y;
*/

