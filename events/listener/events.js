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