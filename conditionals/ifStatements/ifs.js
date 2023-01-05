// if (10 > 2) {
//     console.log('Yep');
// } else if (11 > 10) {
//     console.log("dbl yep")
// } else if (3 > 1) {
//     console.log("always")
// }



const age = 100
if (age > 70) {
    console.log("In your seventies");
} else if (age > 60) {
    console.log("In your sixties")
} else if (age > 50) {
    console.log("In your fifties");
} else {
    console.log(`Just a wee lad ${age}`)
}

// function slugify(sentence, lowercase) {
//     if (lowercase) {
//         return sentence.replace(/\s/g, '-').toLowerCase()
//     } else {
//         return sentence.replace(/\s/g, '-')
//     }
// }



function slugify(sentence, lowercase) {
    let slug = sentence.replace(/\s/g, '-')

    if (lowercase) {
        return slug.toLowerCase()
    }
    return slug
}

function getFee(isMember) {
    // if isMember is true return $2.00. If false return $10.00
    return (isMember ? "$2.00" : "$10.00")
}


function isBeer(age) {
    const beverage = age >= 21 ? "Beer" : "Juice"
    return beverage
}

// NOTE: 'Strict Inequality' ignores data types by converting compared values to numbers.
// 10 !== '10' returns true

// standard comparison operators
// 10 != '10' returns false

const person = 'Adam'
const last = 'bos'

// OR comp.
// if (person === 'Adam' || person === "toadstool") {
//     console.log('Cool Name');
// }

// And Comp
// if (person === 'Adam' && person === "toadstool") {
//     console.log('Cool Name');
// } else {
//     console.log(`Meh ${person}`);
// }


// Can stack comp.

if (person === "Joe" || (person === "Adam" && last === "bos")) {
    console.log(`Cool name ${person} ${last}`)
}

// 10 === 10 && 5 == 5
// adam === adam && bos === bos
// joe === joe && bos === bos

console.log("text".includes("ex"))


console.log('email@test.com'.includes("@" && (".com" || ".net")));

// const name = 'wes'

const isAwesomeName = 'mAdam'.includes(person)
console.log(isAwesomeName)

const bosName = 'thisbos'.includes(last)
console.log(bosName);


function nameIsMad(person) {
    return 'mAdamm'.includes(person)
}

if (nameIsMad('Adam')) {
    console.log('Mad ccool fool')
}



const dog = 'snickers'

if (dog) {
    console.log("You have a dog");
} else {
    console.log("Go get a dog")
}



// Truthy or Falsy values

//     0 // falsy
//     1 // truthy
//     -10 // truthy
//     undefined variable // falsy
//     Variable set to null // falsy
//     a variable set to "hello" - 10 NaN // falsy
//     empty string // falsy
//     full string // truthy
//     a string of "0" // truthy
//     empty array // truthy
//     empty object // truthy


// If you ever need to check for something in an array, look for .length (we are getting a bit ahead of ourselves here).
// The length is how you tell how many items are in an array.

// If you want to check if there is anything in the object, you can use something called Object.keys({})
// which will turn it into an array and then you can chain.length on it like so

// Object.keys({}).length

const myArray = [[], {}, -10, 1, 0, "", "full-string", " ", undefined, NaN, null];

// NOTE: !! To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double NOT operator (!!) or the Boolean constructor.
myArray.forEach((value) => {
    console.log(!!value, value);
})
