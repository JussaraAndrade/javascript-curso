/* ================================================================================== 
map() 
=====================================================================================*/

const numbers = [1, 4, 5, 9, 14, 23]

/* Dobrar valores
==================================================================================== */
const doubleNumbers = numbers.map(num => num * 2)

//console.log(doubleNumbers)



/* Fahrenheit para Celsius ========================================================== */

const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

/*
Função anomina: 

const celsius = fahrenheit.map(function(elem){
    return Math.round((elem - 32) * 5/9 )
})
*/

// Arrow function
const celsius = fahrenheit.map(elem => Math.round((elem - 32) * 5/9))

//console.log(celsius)





/* ================================================================================== 
filter() 
=====================================================================================*/

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) === index)

//console.log(uniqueArray)





/* ================================================================================== 
reduce() 
=====================================================================================*/

// Array de objeto
const rockets = [
    { country: "Russia", launches: 32 },
    { country: "US", launches: 23 },
    { country: "China", launches: 16 },
    { country: "Europa", launches: 7 },
    { country: "India", launches: 4 },
    { country: "Japan", launches: 3 }
]

// Descobrir o total do lançamento
const totalLaunches = rockets.reduce( (prevVal, elem) => prevVal + elem.launches, 0)

console.log(totalLaunches)