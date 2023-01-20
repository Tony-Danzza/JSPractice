const jokeBtn = document.querySelector('.get-joke')

const jokeHolder = document.querySelector('.joke p ')

const loader = document.querySelector('.lds-facebook')

const buttonText = [
	'Ugh.',
	'🤦🏻‍♂️',
	'omg dad.',
	'you are the worst',
	'seriously',
	'stop it.',
	'please stop',
	'that was the worst one',
]

// const wait = (amount=0) => new Promise(resolve => setTimeout(resolve, amount))



async function fetchJoke() {
    loader.classList.remove("hidden")
    jokeBtn.classList.add('hidden')
	const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
		},
	})
	const data = await response.json()
	console.log(data)
	// return response.json()
    loader.classList.add('hidden')
    jokeBtn.classList.remove('hidden')
    
	return data
}

function handleError(err) {
	console.log('we have an error!')
	return new ErrorEvent(err)
}

function randomItemFromArray(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)]
	// console.log(`not value:${not} \n item value: ${item}`);
	if (not === item) {
		console.log(`not value:${not} \n item value: ${item}`)
		// item = arr[Math.floor(Math.random() * arr.length)]
		return randomItemFromArray(arr, not)
	}
	return item
}
// randomItemFromArray(buttonText, jokeBtn.textContent)

async function handleClick() {
	const { joke } = await fetchJoke().catch(handleError)
	// console.log(text);
	jokeHolder.textContent = joke
	console.log(joke)
	jokeBtn.textContent = randomItemFromArray(buttonText, jokeBtn.textContent)
}

jokeBtn.addEventListener('click', handleClick)
// console.log(fetchJoke().catch(handleError))
// jokeBtn.addEventListener('click', async function () {

//     const { joke } = await fetchJoke().catch(handleError) //NOTE:  { joke } to destructure data obj. and only access the joke property
//     console.log(joke);
//     jokeHolder.textContent = joke
// })
