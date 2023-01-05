
const count = 0
const word = count === 1 ? 'item' : 'items'

const sentence = `You have ${count}${word} in your cart`

console.log(sentence)


// const count = 0;
// const word = count === 1 ? 'item' : 'items';
// const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
// console.log(sentence);



// isAdmin ? showAdminBar() : null;
// isAdmin && showAdminBar();

// We can abuse it by using isAdmin && showAdminBar();

// JavaScript will say, this is a condition so check if the first is true, and if it is true, we will go ahead and do the next one. However if it is false, it won't run showAdminBar().

// This is abusing the condition chaining, meaning that if the first condition is false, the second will never run.