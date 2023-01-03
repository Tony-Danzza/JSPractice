const width = window.innerWidth
const height = window.innerHeight
console.log(width/height)
        

const butts = document.querySelector('.butts')

butts.addEventListener('click', function () {
    console.log('clicked')
})


function handleClicked() {
    console.log("It got Clicked!")
}

// butts.addEventListener('dblclick', handleClicked)
butts.removeEventListener('click', handleClicked)

const coolBtn = document.querySelector('.cool')

// coolBtn.addEventListener('click', handleClicked)
coolBtn.removeEventListener('click', handleClicked)


const hooray = () => console.log("Hooray!");


const round = () => {
    if (coolBtn.getAttribute('style') == 'background-color:#fff;') {
        coolBtn.setAttribute('style', "background-color:powderblue;")
        
    } else {
        coolBtn.setAttribute('style', "background-color:#fff;")
    }
    

}
coolBtn.addEventListener('click', round)


const buyBtns = document.querySelectorAll('button.buy')


console.log(buyBtns.forEach((buyBtn, i) => {
    console.log(buyBtn.innerHTML);
    console.log(buyBtn, i);
    buyBtn.addEventListener('click', function() {
        console.log(`Buying Item ${i + 1}`)
    })
}))


function buyItem(num) {
    console.log("Buying item")
}


function handleBuyBtn(oprah) {
    console.log('Binding the buy button');
    oprah.addEventListener("click", buyItem)
}

buyBtns.forEach(handleBuyBtn)


// Working with the click event.
buyBtns.forEach(function (buyBtn) {
    buyBtn.addEventListener('click', handleBuyButtonClick)
})



function handleBuyButtonClick(event) {
    
    // event.stopPropagation();
    console.log("You are buying it");
    console.log(new PointerEvent(event.type))
    console.log(event.target.dataset);
    console.log(typeof(event.target.dataset.price));
    console.log(typeof(parseFloat(event.target.dataset.price)));
    console.log((parseFloat(event.target.dataset.price)));
    console.log((parseInt(event.target.dataset.price)));
    console.log(((event.target.dataset.price)));
    const button = event.target

    console.log(button.textContent)
    console.log(button);
    console.log(event.currentTarget)
    
}


// window.addEventListener('dblclick', function (event) {
//     event.stopPropagation()
//     console.log(`You have ${event.type} on the ${event.currentTarget}`)
// })

window.addEventListener('dblclick', function (e) {
    console.log("you clicked the window");
    console.log(e.target)
    console.log(e.type)
    console.log(e.bubbles)
    e.stopPropagation()
},
    {capture: true}
)
    

const photoEl = document.querySelector('.photo')
photoEl.addEventListener('mousemove', function (e) {
    console.log(e.currentTarget)
    console.count(e.currentTarget);
    console.log(this);
})

// this and e.currentTarget are the same thing,
// suggest not to use this in event listeners or callbacks always use e.target or e.currentTarget