const wait = (amount = 0) => new Promise((resolve) => setTimeout(resolve, amount))

// function getRandomBetween(min, max) {
//     // NOTE: This is not considered a pure function. Pure Functions will return a implicit value.
//     return Math.round(Math.random() * (max - min) + min)
// }
// getRandomBetween(0,100)

function getRandomBetween(min, max, randomNumber) { 
    // NOTE: This is a pure function
    return Math.round(randomNumber * (max - min) + min)
}
// getRandomBetween(0, 100, Math.random())

// async function draw(el) {
//     // console.log(element)
//     const text = el.textContent
//     let soFar = ''
//     for (const letter of text) {
//         console.log(letter)
//         soFar += letter
//         console.log(soFar)
//         el.textContent = soFar
//         const { typeMin, typeMax } = el.dataset
//         const amountOfTimeToWait = getRandomBetween(typeMin, typeMax, Math.random())
//         await wait(amountOfTimeToWait)
//     }
// }

// USING REcursion

async function draw(el) {
    let index = 1
    const text = el.textContent
    const {typeMin, typeMax} = el.dataset
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax, Math.random())

    async function drawLetter(){
        el.textContent = text.slice(0,index)
        index++
        await wait(amountOfTimeToWait)
        if (index <= text.length) {
            drawLetter()
        }
    }
    drawLetter()    
}


const els = document.querySelectorAll('[data-type]').forEach(draw)

