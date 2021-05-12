## Função includes()

* `includes()`; é utilizado quando for preciso saber se um array ou objeto possui determinado valor ou elemento, o retorno é booleano o resultado será true ou false.

Informação importante:

* Cuidado que as vezes determinada situações `includes()` pode ter alguma confusão com `some()` alguns resultado inesperados.

```js
    // Exemplo 1:
    console.log([1, 2, 3].includes(4)) // Não costa no array: false
    console.log([1, 2, 3].includes(2)) // Consta no array: true

    // Exemplo 2:
    const people = [ "Adamastor", "Joana", "Mauricio", "Lalau" ]
    console.log( people.includes( "Joana" )) // true

    // Exemplo 3:

    const people = [
   { id: 11, name: "Adamastor", age: 23, group: "editor" },
   { id: 47, name: "Joana", age: 28, group: "user" },
   { id: 85, name: "Mauricio", age: 34, group: "editor" },
   { id: 97, name: "Lalau", age: 47, group: "admin" }
    ]

    const filterredUsers = people.filter( p => p.name.includes( "J")) 
    console.log( filterredUsers )

```


