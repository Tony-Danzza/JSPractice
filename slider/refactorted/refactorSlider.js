function Slider(slider) {
	// console.log(slider)
	// console.log(slider instanceof(Element));
	// NEEDS TO BE WRAPPED IN () for bang to work right
	if (!(slider instanceof Element)) {
		throw new Error('No valid Slider found on page!')
	}

    // this.slider = slider
    
	this.slides = slider.querySelector('.slides')
	const nextBtn = slider.querySelector('.go-to-next')
	const prevBtn = slider.querySelector('.go-to-prev')
	// console.log(prevBtn, nextBtn);
	// console.log(slides.firstElementChild)
	// Functions to run upon calling Slider()
	this.startSlider()
	this.applyClasses()
	// move("back")
	prevBtn.addEventListener('click', () => this.move('back'))
	// nextBtn.addEventListener('click', function () {
	// move("forward")
	// })
	nextBtn.addEventListener('click', () => this.move('forward'))
}

Slider.prototype.startSlider = function () {
	this.current =
		this.slides.querySelector('.current') || this.slides.firstElementChild
	// console.log(this.current)
	this.prevEl =
		this.current.previousElementSibling || this.slides.lastElementChild
	this.nextEl =
		this.current.nextElementSibling || this.slides.firstElementChild
	// console.log(!!this.prevEl, !!this.nextEl, 'TestME')
}

Slider.prototype.applyClasses = function () {
	this.prevEl.classList.add('prev')
	this.current.classList.add('current')
	this.nextEl.classList.add('next')
}

Slider.prototype.move = function (direction) {
	// define an array of a classes to remove and use spread operator to apply
	const classesToRemove = ['prev', 'current', 'next']
	// NOTE: pass an array of item to remove class values from and loop over with forEach. Where el will = each item in the array
	// [this.prevEl, this.nextEl, this.current].forEach((el) => (el.classList.remove(...classesToRemove)));
	this.prevEl.classList.remove(...classesToRemove)
	this.current.classList.remove(...classesToRemove)
	this.nextEl.classList.remove(...classesToRemove)
	if (direction === 'back') {
		// [this.prevEl, this.current, this.nextEl] = [this.prevEl.previousElementSibling, this.prevEl, this.current || slides.lastElementChild]
		this.prevEl =
			this.prevEl.previousElementSibling || this.slides.lastElementChild
		this.current =
			this.current.previousElementSibling || this.slides.lastElementChild
		this.nextEl =
			this.nextEl.previousElementSibling || this.slides.lastElementChild

		// console.log(`GOING BACK: Prev ${this.prevEl.innerText}, Current ${this.current.innerText}, next ${this.nextEl.innerText}`)
		// this.prevEl.classList.add('prev')
		// this.current.classList.add('this.current')
		// this.nextEl.classList.add('next')
	} else {
		[this.prevEl, this.current, this.nextEl] = [
			this.current,
			this.nextEl,
			this.nextEl.nextElementSibling || this.slides.firstElementChild,
		]
		// this.prevEl = this.prevEl.nextElementSibling || slides.firstElementChild
		// this.current = this.current.nextElementSibling || slides.firstElementChild
		// this.nextEl = this.nextEl.nextElementSibling || slides.firstElementChild
	}

	this.applyClasses()
	// this.prevEl.classList.add('prev')
	// this.current.classList.add('this.current')
	// this.nextEl.classList.add('next')
}

const mainSlider = new Slider(document.querySelector('.main-slider'))
const dogSlider = new Slider(document.querySelector('.dog-slider'))

console.log(mainSlider, dogSlider)
