const cardButtons = document.querySelectorAll('.card button')

const modalOuter = document.querySelector('.modal-outer')
const modalInner = document.querySelector('.modal-inner')



function handleCardClick(e) {
    const button = e.currentTarget
    const card = button.closest('.card')
    const name = card.querySelector('h2').textContent
    // console.log(card);
    const imgSrc = document.querySelector('img').src
    // console.log(imgSrc)
    const desc = card.dataset.description
    // console.log(desc);
    // console.log("Yay! clicked it!")
    modalInner.innerHTML =
    `<img width='600' height='600' src="${imgSrc.replace('200', '600')}" alt="${name}">
    <p>${desc}</p>`
    modalOuter.classList.add('open')
}


function closeModal() {
    modalOuter.classList.remove('open')
}
modalOuter.addEventListener('click', function (event) {
    // NOTE: can use a bang "!" variable to a boolean
    const isOutside = !event.target.closest('.modal-inner')
    if (isOutside) {
        closeModal()
    }
    console.log(isOutside)
    console.log(event, "EVENT");
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(this);
})

window.addEventListener('keydown', event => {
    console.log(event)
    console.log(event.key)
    if (event.key === 'Escape') {
        closeModal()
    }
})

cardButtons.forEach(button => {
    button.addEventListener('click', handleCardClick)
        
})

