// const name = 'Adam'
// const age = 31


// let a = 3
 
// let b = 4

// Invalid declaration

// function doctorize(firstName) {
//     return `Dr. ${firstName}`
// }


// Sill not ideal
// const doctorize = function(firstName) {
//     return `Dr. ${firstName}`
// }
// console.log(doctorize(name))


// // Hoisted Functions

// console.log(doctorize2('Adam2'))

// const doctorize = function (firstName) {
//     return `Dr ${firstName}`
// }

// function doctorize2 (firstName) {
//     return `Dr ${firstName}`
// }


// ARROW functions!

// concise
// do not have their own scope in reference to the 'this' keyword

// aka anonymous

// function inchToCM(inches) {
//     return inches * 2.54
    
// }

// const inchToCM = (inches) => {
//     return inches * 2.54
// }

// or

// const inchToCM = inches => inches * 2.54
// if only one param can remove ()

// function add(a, b = 3) {
//     return a + b
// }

// const add = (a, b=3) => a + b


// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby
// }


// to implicitly return object in from function wrap in ()
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 })


// IIFE
// immediately invoked function expressions

// (functions) always run first in JS and then by calling it immediately with ()
// (function () {
//     console.log("Running the ANON functions")
//     return `You are cool`
    
// })()

// to pass in argument

// (function (age) {
//     console.log("Running the ANON functions")
//     console.log(`You are ${age}`)
//     return `You are ${age}`

// })(31)

// let incomplete = document.querySelector("#incomplete")

// incomplete.setAttribute('class', 'new')

