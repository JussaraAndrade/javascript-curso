let telefone = '54';

/*  
    essa string tem que ter 9 caracter, caso não tenha ele completa com: *
     
    console.log( telefone.padEnd(9, '*') ); // 54*******
*/
console.log( telefone.padEnd(9, '-') );
console.log( telefone.padStart(9, '-') );

let cartao = '1234123412341234';

let lastDigits1 = cartao.slice(-4);
let lastDigits2 = cartao.slice(0, 3);

let cartaoMascarado1 = lastDigits1.padStart(16, '*');

let cartaoMascarado2 = lastDigits2.padEnd(16, '*');

console.log('Este é o seu cartão? ' +cartaoMascarado1);
console.log('Este é o seu cartão? ' +cartaoMascarado2);
