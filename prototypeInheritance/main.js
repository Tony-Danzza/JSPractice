function Pizza(toppings = [], customer) {
	console.log('Making a pizza')
	// save the toppings that were passed in, to this instance of pizza
	this.toppings = toppings
	this.customer = customer
	this.id = Math.floor(Math.random() * 16777215).toString(16)
	this.slices = 10

	this.eat
}

Pizza.prototype.eat = function () {
	this.slices = this.slices - 1 ? this.slices - 1 : 0

	console.log(`Chomp, only ${this.slices} slices left!`)
	// if (this.slices > 0) {
	//     this.slices -= 1
	//     return this.slices
	// }
	// console.log("We are out of slices.")

	return this.slices
}

// description method
// customer name, toppings and slices left

Pizza.prototype.description = function () {
    // console.log(`Customer: ${this.customer} Toppings: ${this.toppings} Slices left: ${this.slices}`)
    return `Customer: ${this.customer}\n Toppings: ${this.toppings.join(',')}\n Slices left: ${this.slices}`
}


const pepperoniPizza = new Pizza(['pepperoni'], 'Wes Bos')

const canadianPizza = new Pizza(['pepperoni', 'mushrooms', 'onion'], 'Kait Bos')

console.log(canadianPizza, pepperoniPizza)

// Object { toppings: (1) […], customer: "Wes Bos", id: "b25d5c", slices: 10 }
// customer: "Wes Bos"              //NOTE: customer, id and slices are all 'instance properties'
// id: "b25d5c"                         that will there when the object is called.
// slices: 10
// toppings: Array [ "pepperoni" ]
// <prototype>: Object { eat: eat(), … }

// NOTE: polyfills
// String.prototype.sarcastic = function () {
// 	const sarcastic = this.split('').map((char, i) => {
// 		// char = i % 2 ? char.toUpperCase() : char.toLowerCase()
//         if (i % 2) {
//            return char.toLowerCase()
//         } else {
//             return char.toUpperCase()
//         }
// 	}).join('')
//     return sarcastic
// }
