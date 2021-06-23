// Objetos - é muito similar ao array

/* Qual é a diferença entra array e objeto? 
    - Array; é uma listagem númerada
    - Objeto; é uma listagem nomeada
*/

// Objeto - ele tem 3 propriedades (nome, modelo e peso)
let carros = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function() {
        console.log("VRUM VRUM!");
    },
    acelerar: function () {
        console.log("Riiiiiiiihihi");
    }
};

//console.log(carros['nome']);
//console.log(carros.nome);

console.log( carros.modelo );
carros.ligar();
carros.acelerar();