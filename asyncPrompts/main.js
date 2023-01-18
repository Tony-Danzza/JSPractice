const wait = (amount = 0) =>
	new Promise((resolve) => setTimeout(resolve, amount))

async function destroyPopup(popup) {
	popup.classList.remove('open')
	popup.classList.add('close')
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
                <input tabindex="0" type="text" name="input" placeholder="...">
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
			skipBtn.addEventListener(
				'click',
				function () {
					// console.log(e.currentTarget)
					resolve(null) //
					// if (e.currentTarget === skipBtn) {
					destroyPopup(popup)
					// }
				},
				{ once: true }
			)
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

async function askQuestion(e) {
	const button = e.currentTarget

	const cancelItem = 'cancel' in button.dataset //NOTE: "'property-name' in element" is how you check if a property is present, even if FALSEY
	// const cancelItem = button.hasAttribute('data-cancel') //NOTE: this would also work

	const answer = await ask({
		title: button.dataset.question,
		cancel: cancelItem,
	})

	// console.log(answer)
}

console.log(ask)

const buttons = document.querySelectorAll('[data-question]') //this will select any element with the attr. of data-question

buttons.forEach((btn) => btn.addEventListener('click', askQuestion))

const questions = [
	{ title: 'What is your Name?' },
	{ title: 'What is your age?', cancel: true },
	{ title: "What is your dog's name?" },
]

// Promise.allSettled([
// 	ask(questions[0]),
// 	ask(questions[1]), // NOTE: this well not work since we are trying to return our promises sequentially
// 	ask(questions[2]), //NOTE: not all at once
// ]).then((answers) => {
// 	console.log(answers)
// })


// NOTE: we use map to go over each question
// Promise.allSettled([questions.map(ask)]).then(data => {
//     console.log(data)
// })


// 
async function asyncMap(array, callback) {
    const results = []
    for (const item of array) {
        const result = await callback(item)
        results.push(result)
    }
    return results   
}

// asyncMap(questions, ask)

async function go() {
	const answers = await asyncMap(questions, ask)
	console.log(answers)
}
go()
// async function askMany() {
//     for (const question of questions ) {    // NOTE: for (of) allows your to pause a loop by awaiting something inside it.
//         const answer = await ask(question)
//         console.log(answer);
//     }
    
// }


// askMany()