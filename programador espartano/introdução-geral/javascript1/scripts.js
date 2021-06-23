/*
     *Alteração que houve em 2015/ECMAscript versão 2015

    - Hoisting; enviada escopo geral da tela consegue usar variável global ex: windows 
    - Desvantagem; tem acesso a ela em qualquer área do sistema (var por variável global) 
*/
var nome1 = "Jussara";
console.log( window.nome1 );

/*
    - let; fica visível apenas naquele escopo, naquela área específica do código 
    - Desvantagem; essa variável fica disponivel, se tentar acessar em outro local não vai 
    conseguir acessar e muito menos com window
*/
let nome2 = "Jussara";

console.log(Window.nome2);

/*
    Conceito

    let; só vai ser disponivel naquele escopo específico.
    
    Vantagem - evita gasto desnecessário de memória  
*/
// condicional
let nome3 = "Jussara";

if (nome3 == 'Jussara'){
    let idade = 90;
    console.log(idade);
}

// muda o valor, não define a variavel com mesmo nome
let nome = "Jussara";
nome = "Thomaz";

console.log(nome);

/*
    - const; variável de valor constante (não posso modificar o valor dela)
    - proteger as informações
    - é útil no uso de array e objeto
    - vantagem; ela não pode receber um novo valor 
    - exeção do const; usa em arrays e objetos
    - variável que armazena todo tipo de dados, não pode redeclarar a variável como um todo

    Atenção:

    * Não use mais var
    * começa a usar let(variável que pode ser modificada) e const (variável que não pode ser modificada) dependendo da situação
*/

//apresenta um erro que é (Uncaught TypeError: invalid assignment to const 'nome4')
// const nome4 = "Jussara";
// nome4 = "Thomaz";
// console.log(nome4);

const nome5 = {nome: "Jussara", sobrenome: "Andrade"};
nome5.nome = "Thomaz";

console.log(nome);

// o que não pode é redefinir a variavel com um valor totalmente diferente, apresenta o mesmo erro (Uncaught TypeError: invalid assignment to const 'nome6')
// const nome6 = {nome: "Jussara", sobrenome: "Andrade"};
// nome6 = {idade: 90, hooby: 'codigo'};
// console.log(nome6);
