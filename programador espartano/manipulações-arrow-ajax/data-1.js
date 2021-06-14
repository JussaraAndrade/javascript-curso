// data atual - pega a data do computador
let d = new Date();

console.log( d );
console.log( d.toDateString() );
console.log( d.toUTCString() );
console.log( d.toString() );

// no javascript o mês começa do 0 - janeiro é 0/dezembro é 11
/* 
            //ano  //mes  //dia  //12 horas  // minutos     // segundos
    new Date(2020,  0,      1,      12,          30,             12) 
*/
let d1 = new Date(2020, 0, 1, 12, 30, 12);
console.log( d1.toString() );

// date string
let d2 = new Date('2020-01-01 15:42:17');
console.log(d2);

let d3 = new Date(2022, 2, 15);
console.log( d3.toString() );

let d4 = new Date(0);
console.log( d4.toUTCString() );

