function ask(options) {
    return new Promise(function (resolve) {
        console.log(resolve, options);
        // first we need to create a popup with all the fields
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.insertAdjacentHTML('afterbegin', `
            <fieldset>
                <label>${options.title}</label>
            </fieldset>
        `)
        
        console.log(popup)
        
        // check if they want a cancel button
        if (options.cancel) {
            const skipBtn = document.createElement('button')
            skipBtn.type = 'button'
            skipBtn.textContent = 'Cancel'

            // TODO: listen for click on button
        }
        // listen for the submit event

        // resolve submit event

        document.body.appendChild(popup)
        setTimeout(function () {
            popup.classList.add('open')
            
        }, 10)
    })
}

console.log(ask);
