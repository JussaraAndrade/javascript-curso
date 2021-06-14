let lista = [45, 4, 9, 16, 25];
let lista2 = [];

// soma os valores 
lista2 = lista.map((item) => {
    return item * 2;
});

// vai retornar um true ou false
lista2 = lista.filter((item) => {
    if(item > 20){
        return true;
    } else {
        return false;
    }
});

lista2 = lista.every((item) => {
    // if reduzido - ternário
    return (item > 10)? true : false
});


let res = lista2;

console.log(res);