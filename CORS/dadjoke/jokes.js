const jokeBtn = document.querySelector('.get-joke')

const jokeHolder = document.querySelector('.joke p ')

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
  ];
  

async function fetchJoke() {
    jokeHolder.textContent = 'Loading...'
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
            
        }
    })
    const data = await response.json()
    console.log(data)
    // return response.json()
    return data
}

function handleError(err) {
    console.log("we have an error!");
    return new ErrorEvent(err)
}


// console.log(fetchJoke().catch(handleError))
jokeBtn.addEventListener('click', async function () {

    const { joke } = await fetchJoke().catch(handleError) //NOTE:  { joke } to destructure data obj. and only access the joke property
    console.log(joke);
    jokeHolder.textContent = joke
})