const wait = (amount = 0) =>
	new Promise((resolve) => setTimeout(resolve, amount))

async function destroyPopup(popup) {
	popup.classList.remove('open')
	await wait(1000)

    
	popup.remove()
    popup = null //NOTE: to remove completely from DOM
}

function ask(options) {
	return new Promise(function (resolve) {
		console.log(resolve, options)
		// first we need to create a popup with all the fields
		const popup = document.createElement('form')
		popup.classList.add('popup')
		popup.insertAdjacentHTML(
			'afterbegin',
			`<fieldset>
                <label>${options.title}</label>
                <input type="text" name="input" placeholder="Enter Value...">
                <button type="submit">Submit</button>
        </fieldset>`
		)

		console.log(popup)

		// check if they want a cancel button
		if (options.cancel) {
			const skipBtn = document.createElement('button')
			skipBtn.type = 'button'
			skipBtn.textContent = 'Cancel'
			popup.firstElementChild.appendChild(skipBtn) //NOTE: by using firstChild we can append it right to the fieldset, b/c fieldset it the first element.

			// TODO: listen for click on button
			skipBtn.addEventListener('click', function (e) {
				console.log(e.currentTarget)
				if (e.currentTarget === skipBtn) {
					popup.classList.remove('open')
				}
			})
		}

		// listen for the submit event
		popup.addEventListener(
			'submit',
			function (e) {
				e.preventDefault()
				console.log('Submitted')

				console.log(e.target.input.value)
				resolve(e.target.input.value) //NOTE: we are targeting the form that has a name='input'
				// e.target.input.value = ''
				destroyPopup(popup)
			},
			{ once: true }
		) //NOTE: add the optional options object to eventlistener with once property as true.
		// resolve submit event

		document.body.appendChild(popup)

		async function open() {
			await wait(50)
			popup.classList.add('open')
		}
		open()
		// setTimeout(function () {
		//     popup.classList.add('open')

		// }, 50)
	})
}

console.log(ask)
