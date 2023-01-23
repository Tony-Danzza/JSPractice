const cardBtns = document.querySelectorAll('.card button')

const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')

function handleCardClick(e) {
	const button = e.currentTarget
	const card = button.closest('.card')
	console.log(card)
	const imgSrc = card.querySelector('img').src
	const name = card.querySelector('h2').textContent
	const desc = card.dataset.description
	console.log(desc, name)
	modalInner.innerHTML = `<img src="${imgSrc.replace('200', '600')}" alt="${name}">
	<p>${desc ? desc : "No Description given"}</p>`
	modalOuter.classList.add('open')

  
}

function closeModal() {
	modalOuter.classList.remove('open')
}

modalOuter.addEventListener('click', function (e) {
	// console.log(e.target)
	const isOutside = !e.target.closest('.modal-inner')
	// console.log(isOutside);
	if (isOutside) {
		closeModal()
	}
})

window.addEventListener('keydown', (e) => {
	// console.log(e.key)
	if (e.key === "Escape") {
		return closeModal()
	}
})

cardBtns.forEach((button) => {
	button.addEventListener('click', handleCardClick)

})
