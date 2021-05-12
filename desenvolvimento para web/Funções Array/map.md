## Função map()

* `map()`; é utilizado quando for traduzir ou mapear todos os elementos do array de um array pra outro conjunto de valores.

### Função anonima:

```js
    const numbers = [1, 4, 5, 9, 14, 23]

    const doubleNumbers = numbers.map(function(elem){
        return elem * 2
    })
    // [ 2, 8, 10, 18, 28, 46 ]
```

### Função anonima renomeada:

```js
    const numbers = [1, 4, 5, 9, 14, 23]

    function doubleNumbers(num){
    return num * 2
    }

    const doubleNumbers = numbers.map(doubleNumbers)

    console.log(doubleNumbers)

     // [ 2, 8, 10, 18, 28, 46 ]
```

### Escrita moderna:

```js
    const numbers = [1, 4, 5, 9, 14, 23]

    const doubleNumbers = numbers.map(num => num * 2)

    console.log(doubleNumbers)

     // [ 2, 8, 10, 18, 28, 46 ]
```

### Escrita moderna (Arrow function):

```js
    const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

    const celsius = fahrenheit.map(elem => Math.round((elem - 32) * 5/9))

    console.log(celsius)
    // -18,  0,  7, 10, 24, 27, 49
```