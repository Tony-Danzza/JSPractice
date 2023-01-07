// const _ = import("./lodash")
const _ = import("lodash")
// const _ = require('.lodash')

let name1 = 'adam'



let name2 = 'adam'

console.log(name1 === name2);
name1 = 'todd'
console.log(name1 === name2)

const person1 = {
    first: "wes",
    last: "bos",
    clothes: {
        pants: true,
        shirt: true,
        size: "large",
    }
}
const person2 = {
    first: "wes",
    last: "bos",
}
// not right
// const person3 = person1
// shallow copy of obj
// const person3 = {... person1}

// console.log(person3.first);
// console.log(person1.first);

// using lodash

const person3 = _.cloneDeep(person1)
person3.first = "larry"
console.log(person3)
console.log(person1.first);
console.log(person3.first);
const person4 = _.cloneDeep(person1)
console.log(person4);