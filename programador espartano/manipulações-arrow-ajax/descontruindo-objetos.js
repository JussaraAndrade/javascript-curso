let pessoa = {
    nome: 'Thomaz',
    sobrenome: 'Henrique',
    // idade: 18,
    social: {
        facebook: 'b7web',
        instagram: 'thomaz'
    },
    nomeCompleto: () => {
        return `${this.nome} ${this.sobrenome}`;
    }
};

// let { nome: pessoaNome, sobrenome, idade } = pessoa;
// se não houve um valor no objeto, tem como colocar o valor padrão dentro dos {} em let { nome, sobrenome, idade=0} ...
let { nome, sobrenome, idade = 0 } = pessoa;

console.log(nome, sobrenome, idade);
