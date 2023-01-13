function Gallery(gallery) {
	if (!gallery) {
		throw new Error('No Gallery Found!')
	}
	// console.log(gallery)
    
    this.gallery = gallery

	this.images = Array.from(gallery.querySelectorAll('img'))
	// console.log(images)
	// images.forEach((image)=> console.log(image))
	this.modal = document.querySelector('.my-modal')
	this.prevBtn = this.modal.querySelector('.prev')
	this.nextBtn = this.modal.querySelector('.next')
	// let currentImg



    // NOTE: bind out method to this
    this.showNextImage = this.showNextImage.bind(this)
    this.showPrevImage = this.showPrevImage.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

    

	// function handleImageClick(event) {
	//     showImage(event.currentTarget)
	// }

	// There are out EventListeners
	this.images.forEach((image) =>
		image.addEventListener('click', (e) => this.showImage(e.currentTarget))
	)

	this.images.forEach((image) =>
		image.addEventListener('keyup', (e) => {
			if (e.key === 'Enter') {
				return this.showImage(e.currentTarget)
			}
		})
	)
	this.modal.addEventListener('click', this.handleClickOutside)
}

Gallery.prototype.openModal = function () {
	console.info('opening modal')
	if (this.modal.matches('.open')) {
		console.info('Modal Already Open')
		// NOTE: will prevent modal from activating animations while open
		return
	}
	this.modal.classList.add('open')
	// NOTE: event listeners to be bound on opening modal

	window.addEventListener('keyup', this.handleKeyUp)
	this.nextBtn.addEventListener('click', this.showNextImage)
	this.prevBtn.addEventListener('click', this.showPrevImage)
}

Gallery.prototype.closeModal = function () {
	this.modal.classList.remove('open')
	window.removeEventListener('keyup', this.handleKeyUp)
	this.nextBtn.removeEventListener('click', this.showNextImage)
	this.prevBtn.removeEventListener('click', this.showPrevImage)
	//NOTE: add events for clicks and other keys
}

Gallery.prototype.handleClickOutside = function (e) {
    console.log(this);
	if (e.target === e.currentTarget) {
		this.closeModal()
	}
}

Gallery.prototype.handleKeyUp = function (event) {
	// NOTE: Adding 'return' will stop script from continuing upon calling following function
	if (event.key === 'Escape') return this.closeModal()
	if (event.key === 'ArrowRight') return this.showNextImage()
	if (event.key === 'ArrowLeft') return this.showPrevImage()
}

Gallery.prototype.showNextImage = function () {
	// console.log(currentImg.nextElementSibling);
    console.log(this.gallery);
	this.showImage(
		this.currentImg.nextElementSibling || this.gallery.firstElementChild
	)
}
Gallery.prototype.showPrevImage = function () {
	// console.log(currentImg.previousElementSibling);
	this.showImage(
		this.currentImg.previousElementSibling || this.gallery.lastElementChild
	)
}

Gallery.prototype.showImage = function (el) {
	if (!el) {
		console.info('No image to show.')
		return
	}
	// console.log(el);
	this.modal.querySelector('img').src = el.src
	this.modal.querySelector('h2').textContent = el.title
	// console.log(el.dataset.description)
	this.modal.querySelector('p').textContent = el.dataset.description

	this.currentImg = el
	this.openModal()
}

const gallery1 = new Gallery(document.querySelector('.gallery1'))
const gallery2 = new Gallery(document.querySelector('.gallery2'))

console.log(gallery1, gallery2)
