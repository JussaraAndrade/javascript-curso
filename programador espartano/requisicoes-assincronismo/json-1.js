'{"nome": "Thomaz", "idade": 18 }' // string

// parse; transforma string em um json

let pessoa = JSON.parse('{"nome": "Thomaz", "idade": 18 }'); // transformou o que tá dentro {} em JSON

console.log(pessoa.nome);
console.log(pessoa);

JSON.parse('{"nome": "Pedro"}');

let pessoa1 = '{"nome": "Thomaz", "idade": 18 }';
pessoa1 = JSON.parse(pessoa1);
console.log(pessoa1);

