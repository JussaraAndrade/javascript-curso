// promise(promessa); quando vai fazer uma requisição assincrona ou um processo assincrono fica com alguma promessa de um resultado (resultado temporario) 
let pegarTemperatura = () => {
    return new Promise((resolve, reject) => {
        console.log("pegando temperatura...");

        setTimeout(() => {
            resolve('40 na sombra');
        }, 2000);
    });
}


// usando a promise
console.log("código antes!");
let temp = pegarTemperatura();

// callback
console.log("código durante!");
temp.then((resultado) => {
    console.log("Temperatura: " +resultado);
});
// callback
temp.catch((error) => {
    console.log("Eita, deu erro!");
});

console.log("código depois!");

