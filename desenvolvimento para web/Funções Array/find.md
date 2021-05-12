## Função find()

* `find()`; é utilizado quando for preciso procurar ou verificar por um lado dentro de um array objeto, esse retorno vai ser do primeiro elemento que satisfazer o teste.

* Sistema de busca

```js
    const fruits = [
    {name: "jaca", quantity: 2},
    {name: "banana", quantity: 0},
    {name: "cereja", quantity: 5}
    ]

    // Array de frutas vai procurar "find()" a fruta cujo nome é cereja
    const foundFruit = fruits.find(fruit => fruit.name == "cereja")

    console.log(foundFruit) // { name: 'cereja', quantity: 5}

```