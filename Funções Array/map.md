## Função map()

* `map()`; é utilizado quando for traduzir ou mapear todos os elementos do array de um array pra outro conjunto de valores.

### Função anonima:

```js
    const doubleNumbers = numbers.map(function(elem){
        return elem * 2
    })
```

### Função anonima renomeada:

```js
    function doubleNumbers(num){
    return num * 2
    }

    const doubleNumbers = numbers.map(doubleNumbers)

    console.log(doubleNumbers)
```

### Escrita moderna:

```js
    const doubleNumbers = numbers.map(num => num * 2)

    console.log(doubleNumbers)
```

### Escrita moderna (Arrow function):

```js
    const celsius = fahrenheit.map(elem => Math.round((elem - 32) * 5/9))

    console.log(celsius)
```