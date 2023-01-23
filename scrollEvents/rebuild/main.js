function scrollToAccept() {
	const terms = document.querySelector('.terms-and-conditions')
	if (!terms) {
		return
	}
	// const watch = document.querySelector('.watch')
	const button = document.querySelector('.accept')

	function obCallback(payload) {
		if (payload[0].intersectionRatio === 1 && payload[0].isIntersecting) {
			button.disabled = false
			// NOTE: if we do NOT want the button to become disabled upon scrolling off our observed item
			// ob.unobserve(terms.lastElementChild) //TODO: comment out button will toggle to disabled upon scrolling off observer.
		} else {
			button.disabled = true
		}
		console.log(payload[0].intersectionRatio)
	}

	const ob = new IntersectionObserver(obCallback, {
		//NOTE: intersectionObserver(takes in a callback function, {and a options obj})
		root: terms,
		threshold: 1,
	})
	// ob.observe(watch)
	ob.observe(terms.lastElementChild)

	// terms.addEventListener('scroll', function (e) {
	// 	console.log(e.currentTarget.scrollHeight - e.currentTarget.scrollTop)
	// 	console.log(e.currentTarget)
	// })
}
scrollToAccept()
