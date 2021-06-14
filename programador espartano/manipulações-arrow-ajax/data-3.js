let d = new Date();

d.setFullYear(2022);
d.setMonth(11);
d.setDate(15);

d.setDate( d.getDate() + 1500 );

// d.setHours( d.getHours() + 1500 ); 
d.setHours( d.getHours() - 12 ); 

let novoValor = d;
console.log( novoValor );