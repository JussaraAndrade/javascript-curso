// callbacks; é uma função javascript, quando determinada coisa acontecer executa essa função aqui.

let alertar = () => {
    alert('Opa, tudo bem?')
}

// assincrona
let nome = 'Thomaz'; // executa
setTimeout(alertar, 2000);  // espera, depois executa
let sobrenome = 'Pinheiro'; // executa
console.log("Nome completo: " +nome+ ' ' +sobrenome); // executa