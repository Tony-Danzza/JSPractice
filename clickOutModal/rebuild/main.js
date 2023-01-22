const cardBtns = document.querySelectorAll('.card button')

const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')

function handleCardClick(e) {
	const button = e.currentTarget
	const card = button.closest('.card')
	console.log(card)
	// const imgSrc = card.querySelector('img').src
  const desc = card.dataset.description
  console.log(desc)

  
}

cardBtns.forEach((button) => {
	button.addEventListener('click', handleCardClick)
})
