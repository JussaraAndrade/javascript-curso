let d = new Date();

// dias

let novoValor1 = d.getFullYear();
let novoValor2 = d.getMonth(); // começa contar a partir do 0 o mês de janeiro
let novoValor3 = d.getDay(); // dia da semana 1 - segunda/2- terça/3- quarta/4-quinta/5-sexta etc...
let novoValor4 = d.getDate();

// horas

let novoValor5 = d.getHours();
let novoValor6 = d.getMinutes();
let novoValor7 = d.getSeconds();
let novoValor8 = d.getMilliseconds();
let novoValor9 = d.getTime();

// ECMAscript 5
let novoValor10 = Date.now();

let res = d;

console.log( novoValor1 );
console.log( novoValor2 );
console.log( novoValor3 );
console.log( novoValor4 );
console.log( novoValor5 );
console.log( novoValor6 );
console.log( novoValor7 );
console.log( novoValor8 );
console.log( novoValor9 );
console.log( novoValor10 );

