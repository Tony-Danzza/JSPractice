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
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
            
        }
    })
    const joke = await response.json()
    console.log(joke)
}

function handleError(err) {
    console.log("we have an error!");
    return new ErrorEvent(err)
}

fetchJoke().catch(handleError)