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
    `<img src="${imgSrc.replace('200', '600')}" alt="${name}">
    <p>${desc}</p>`
    modalOuter.classList.add('open')
}

// function closeModal() {
//     modalOuter.classList.
// }

cardButtons.forEach(button => {
    button.addEventListener('click', handleCardClick)
        
})

