let altura = document.querySelector('.texto').scrollHeight
let largura = document.querySelector('.texto').scrollWidth
let offLargura = document.querySelector('.texto').offsetWidth
let offAltura = document.querySelector('.texto').offsetHeight
let cliLargura = document.querySelector('.texto').clientWidth
let cliAltura = document.querySelector('.texto').clientHeight

console.log("Altura do cli " +cliAltura);
console.log("Largura do cli " +cliLargura);
console.log("Altura do off " +offAltura);
console.log("Largura do off " +offLargura);
console.log("Altura do Scroll " +altura);
console.log("Largura do Scroll " +largura);