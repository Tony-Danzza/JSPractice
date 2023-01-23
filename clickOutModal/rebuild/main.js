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
	<p>${desc}</p>`
	modalOuter.classList.add('open')

  
}

cardBtns.forEach((button) => {
	button.addEventListener('click', handleCardClick)
})
