const textArea = document.querySelector('[name="text"]')

const result = document.querySelector('.result')

const filterInputs = document.querySelectorAll('[name="filter"]')

// console.log(textArea, result, [filterInputs]);

function transformText(text) {
    const mod = Array.from(text).map(textFilters.sarcastic)
    console.log(mod)
    
   
    result.textContent = text ? text.textContent : "No value input"

}

const textFilters = {
    // sarcastic: function(){},
    // funky: function(){},
    // unable: function(){},
    sarcastic(letter, index) {
        letter = index % 2 ? letter.toUpperCase() : letter
        // if (index % 2) {
        //     return letter.toUpperCase()
        // }
        console.log(index, letter)

        return letter
    },
    funky(){},
    unable(){},
}

textArea.addEventListener('input', e => transformText(e.target.value))
