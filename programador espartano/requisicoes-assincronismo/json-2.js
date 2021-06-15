// transforma em string
let str = JSON.stringify({
    nome: 'Thomaz',
    idade: 18
});

// transforma em objeto
let obj = JSON.parse('{"nome": "Thomaz", "idade": 18}');

let pessoa = { nome: 'Thomaz', idade: 18, algo: null};

let pessoaString = JSON.stringify(pessoa);

let busca = {input: 'bon'};

buscaString = JSON.stringify(busca);

let resultado = {
    lista: [
        'Thomaz', 
        'Thomaz Henrique', 
        'bonito'
    ]
};

JSON.stringify(resultado)

let res = '{"lista": [ "Thomaz", "Thomaz Henrique", "bonito" ]}';
let resJson = JSON.parse(res);

// PARSE = pega uma string e tranformar em JSON
// STRINGFY = pega um JSON e tranformar em STRING

console.log(str);
console.log(obj);
console.log(pessoaString);
console.log(buscaString);
console.log(resultado);
console.log(resJson);


