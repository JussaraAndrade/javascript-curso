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