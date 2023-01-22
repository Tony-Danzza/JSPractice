const cardBtns = document.querySelectorAll('.card button')

function handleCardClick() {
  // console.log(e.currentTarget)
  console.log("clicked");
}

cardBtns.forEach((button) => {
	button.addEventListener('click', handleCardClick)
})

const button = document.querySelector('.click')

button.addEventListener('click', function () {
  console.log("click")
  
})