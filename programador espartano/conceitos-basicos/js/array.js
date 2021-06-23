// Array de lista

let carros1 = ['Palio', 'Uno', 'Corolla', 'Ferrari'];

let carros2 = new Array('Palio', 'Uno', 'Corolla', 'Ferrari');

let carros3 = [
    'Palio',   // 0
    'Uno',     // 1
    'Corolla', // 2
    'Ferrari', // 3
    // assuntos avançando
    function() {
        console.log('Testando 1, 2, 3...');
    }
];

carros3[4]();

let ingredientes = [
    // Item 1
    ['uva', 'pera', 'maça'],
    // Item 2
    ['arroz', 'macarrão']
];

// pegou o arroz 
console.log(ingredientes[1][0]);