let info = ['Thomaz Henrique', 'Pinheiro', 'Henrique', '@thomaz'];

// let [ nomeCompleto, nome, sobrenome, instagram ] = info;

let [ nomeCompleto, ,, instagram ] = info;
console.log(nomeCompleto, instagram);

// let [, nome, sobrenome] = info;
// console.log(nome, sobrenome);

// let [ nome, sobrenome, idade] = ['Thomaz', 'Henrique', 198];
// console.log(nome, sobrenome, idade);

criar = () => {
    let a = [1,2,3]; 
    return a;
}

let [a,b,c] = criar();

console.log(a,b,c);