## Função filter()

* `filter()`; é utilizado quando é preciso remover elementos indesejados com base em algumas condições, quando é preciso filtrar. 

* Elimina os valores repetido do array


```js
    //Testando se o índice do array original é o mesmo que o índice do elemento
    const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

    // Terceiro array arr é o array original
    const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) === index)

    console.log(uniqueArray)

```