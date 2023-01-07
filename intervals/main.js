// setTimeout takes 2 things:

//     a callback
//     the number of milliseconds after which to run the callback


// function buzzer() {
//     console.log("ENGGGG");
// }
// console.log("starting")

// window.setTimeout(buzzer, 100)
// // setInterval(buzzer, 100)

// // console.log("finishing");


// function setImmediateInterval(funcToRun, ms) {
//     funcToRun()
//     setInterval(funcToRun, ms)

// }
// setImmediateInterval(buzzer, 2000)

// function sayHi() {
//     console.log('Hey')
// }

// setImmediateInterval(sayHi, 2500)


// Clearing Timeouts and Intervals


// The only other thing you need to know is if you want to clear a timer or interval, you must save the reference to that timer or interval.

function destroy() {
    document.body.innerHTML = `<p>DESTROYED</p>`;
}

setTimeout(destroy, 2000)


window.addEventListener('click', function () {
    console.log("You have clicked! You have saved the world.")
})


const bombTimer = setTimeout(destroy, 5000)


