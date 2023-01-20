const baseEndpoint = 'http://www.recipepuppy.com/api'
const proxy = 'https://cors-anywhere.heroku.com/'

// NOTE: CORS = 'cross origin resource sharing'
// CORS policy

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`)
    const data = await res.json()
    console.log(data)
}

function handleError(err) {
    console.log("oh No");
    return err
}

fetchRecipes('pizza') //.catch(handleError)