let n1 = 10;
let n2 = 10.654656548;
let n3 = '25';
let n4 = '25.9';

let res1 = n1.toString() + 5; // transforma o número em texto
let res2 = n1 + 5; // soma normal de duas operações

// transforma em quantas casas decimais que quiser
let res3 = 'R$ ' +n2.toFixed(2);

let res4 = parseInt(n3) + 5;
let res5 = parseFloat(n4) + 5.1; 


// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
console.log(res5);