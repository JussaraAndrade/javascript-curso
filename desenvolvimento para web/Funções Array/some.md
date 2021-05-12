## Função some()

* `some()`; é utilizado quando é preciso testar se pelo menos um array passa para um teste específico, pelo menos um ali tem que passar no teste.

* Se isso for verdade ele vai retornar um true, caso não seja ele vai retornar false.

Verifica se há algum número primo:

```js
// Tem uma função que será aplicada a um conjunto de valores
function isPrime( value ){
    for(let i = 2; i < value; i++){
        if( value % i === 0){
            return false
        }
    }
    return value > 1
}

console.log( oneMoreArray.some( isPrime )) // false

```

Verificar por condições em valores/objetos:

* Se é um piloto ou não
* Acessar determinada área no time haja um piloto

```js
    const team = [
    { id: 12, name: "Topper Harley", pilot: true },
    { id: 44, name: "Ramada Thompson", pilot: true },
    { id: 59, name: "Pete Thompson", pilot: false },
    { id: 122, name: "Kowalski", pilot: false }
    ]

    console.log(team.some( person => person.pilot))

```