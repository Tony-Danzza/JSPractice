const cardButtons = document.querySelectorAll('.card button')

function handleCardClick(e) {
    const button = e.currentTarget
    const card = button.closest('.card')
    console.log(card);
    const imgSrc = document.querySelector('img').src
    console.log(imgSrc)
    const desc = card.dataset.description
    console.log(desc);
    console.log("Yay! clicked it!")
}

cardButtons.forEach(button => {
    button.addEventListener('click', handleCardClick)
        
})

