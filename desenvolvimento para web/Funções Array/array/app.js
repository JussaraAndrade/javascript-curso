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

//console.log(totalLaunches)


/*  ================================================================================== 
    every() 
    =====================================================================================*/


/*  Verificar se todos os elementos de um array são maiores que 10 
    =====================================================================================*/

const anotherArray = [ 12, 25, 28, 130, 44 ]

const allAbove10 = anotherArray.every(elem => elem > 10)

//console.log(allAbove10)

/*  Verificar se todos são maiores de idade
    =====================================================================================*/

// Retorno fictício de uma api com alguns dados
const tchurma = [
    {id: 12, name: "Frederico", age: 8},
    {id: 47, name: "Frederica", age: 7},
    {id: 77, name: "Frederico", age: 48},
    {id: 85, name: "Zenon", age: 52},
]

//console.log(tchurma.every( p => p.age >= 18 ))


/*  ================================================================================== 
    some() 
    =====================================================================================*/

/*  Verificar se há algum número primo
    =====================================================================================*/

function isPrime( value ){
    for(let i = 2; i < value; i++){
        if( value % i === 0){
            return false
        }
    }
    return value > 1
}

const oneMoreArray = [ 6, 8, 12, 14, 42 ]

//console.log( oneMoreArray.some( isPrime ))


/*  Verificar por condições em valores/objetos
    =====================================================================================*/

const team = [
    { id: 12, name: "Topper Harley", pilot: true },
    { id: 44, name: "Ramada Thompson", pilot: true },
    { id: 59, name: "Pete Thompson", pilot: false },
    { id: 122, name: "Kowalski", pilot: false }
]

//console.log(team.some( person => person.pilot))


/*  ================================================================================== 
    find() 
    ==================================================================================*/

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

const foundPizza = pizzas.find(p => p.startsWith("m"))

//console.log(foundPizza)

/*  Frutas
    =====================================================================================*/

const fruits = [
    {name: "jaca", quantity: 2},
    {name: "banana", quantity: 0},
    {name: "cereja", quantity: 5}
]

const foundFruit = fruits.find(fruit => fruit.name == "cereja")

//console.log(foundFruit)

/*  ================================================================================== 
    includes() 
    ==================================================================================*/

const people = [
   { id: 11, name: "Adamastor", age: 23, group: "editor" },
   { id: 47, name: "Joana", age: 28, group: "user" },
   { id: 85, name: "Mauricio", age: 34, group: "editor" },
   { id: 97, name: "Lalau", age: 47, group: "admin" }
]

const filterredUsers = people.filter( p => p.name.includes( "J")) 
//console.log( filterredUsers )



/*  ================================================================================== 
    API real! 
    ==================================================================================*/


async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=10')
    
    return response.json()
}

// getPeople().then(data => console.log( data ))

/* Somente mulheres
   =====================================================================================*/

getPeople().then( data => {
    const people = data.results
    
   // console.log(people.filter( p => p.gender == 'female' ))
})

/* Trabalhando com dados
   =====================================================================================*/

getPeople().then( data => {
    const result = data.results.filter( p => p.dob.age >= 30)
    const people = []

    // loop
    for(let p of result){
        people.push( {
            "Nome": `${ p.name.first } ${ p.name.last }`,
            "Sexo": p.gender,
            "Idade": p.dob.age
        })
    }
    console.table( people )
})
