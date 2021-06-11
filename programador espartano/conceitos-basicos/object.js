// Objetos - é muito similar ao array

/* Qual é a diferença entra array e objeto? 

    - Array; é uma listagem númerada
    - Objeto; é uma listagem nomeada
*/

// Objeto - ele tem 3 propriedades (nome, modelo e peso)
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    // armazenar funções
    ligar: function() {
        this.ligado = true;
        console.log("VRUM VRUM!");
    },
    acelerar: function () {
        if(this.ligado == true){
            console.log("Riiiiiiiihihi");
        } else {
            console.log(this.nome+ " " +this.modelo+ " não está ligado!");
        }
    }
};

//console.log(carros['nome']);
//console.log(carros.nome);

console.log("Modelo: " +carro.modelo );

carro.ligar();
carro.acelerar();

// array começa com [], objeto começa com {}
let carros = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Ferrari', modelo: 'Spider'}
];

// console.log(carros[2]['nome']);
console.log(carros[2].nome);