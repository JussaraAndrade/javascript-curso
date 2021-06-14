let pessoa = {
    nome: 'Thomaz',
    // sobrenome: 'Henrique',
    idade: 18,
    social: {
        facebook: 'b7web',
        instagram: {
            url: '@thomaz',
            seguidores: 1000
        }
    },
};

// let { facebook, instagram } = pessoa.social;
// let { nome, idade, social: { instagram} } = pessoa;
// let { nome, idade, social: {instagram:{url:instagram, seguidores}} } = pessoa;
// let { nome, idade, social: {instagram} } = pessoa;
// console.log(nome, idade, instagram);

pegarNomeCompleto = ({nome, sobrenome = 'Pinheiro', social: {instagram:{url: instagram}}}) => {
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa));
