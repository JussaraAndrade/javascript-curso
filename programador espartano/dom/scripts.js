let altura = document.querySelector('.texto').scrollHeight
let largura = document.querySelector('.texto').scrollWidth
let offLargura = document.querySelector('.texto').offsetWidth
let offAltura = document.querySelector('.texto').offsetHeight
let cliLargura = document.querySelector('.texto').clientWidth
let cliAltura = document.querySelector('.texto').clientHeight

let textoTop = document.querySelector('.texto').scrollTop
let textoLeft = document.querySelector('.texto').scrollLeft


console.log("texto Top " +textoTop);
console.log("texto Left " +textoLeft);

console.log("Altura do cli " +cliAltura);
console.log("Largura do cli " +cliLargura);
console.log("Altura do off " +offAltura);
console.log("Largura do off " +offLargura);
console.log("Altura do Scroll " +altura);
console.log("Largura do Scroll " +largura);

let subirTela = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}