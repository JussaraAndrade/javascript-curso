## Função reduce()

* `reduce()`; é utilizado quando é preciso encontrar um valor acumulativo concatenado com base em elementos de todo o array.

* vai chegar em um único número

```js
    // Array de objeto
    const rockets = [
        { country: "Russia", launches: 32 },
        { country: "US", launches: 23 },
        { country: "China", launches: 16 },
        { country: "Europa", launches: 7 },
        { country: "India", launches: 4 },
        { country: "Japan", launches: 3 }
    ]

    /*
        - prevVal; primeiro valor anterior

        - elem.launches; segundo elemento somando com o valor atual

        - É possível definir o valor inicial para somar começando com 0

        - Começa do zero, vai fazendo a soma:
        0 + 32, 32 + 23, 16 + 7, 4 + 3 = 85
    */

    const totalLaunches = rockets.reduce( (prevVal, elem) => prevVal + elem.launches, 0)

    console.log(totalLaunches) // 85
```