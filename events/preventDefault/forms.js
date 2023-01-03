const wes = document.querySelector('.wes')

const signupForm = document.querySelector('[name="signup"]')

// wes.addEventListener('click', function (e) {
//     console.log(e)
//     e.preventDefault()
//     const shouldChangePage = confirm(
//         `${this.dataset.page || this} Website may contain Malicious content. Do you still wish to continue?`
//     );
//     if (shouldChangePage) {
//         window.location == e.currentTarget.href;
//     }
//     console.log(shouldChangePage);
    
// })


wes.addEventListener('click', function (e) {
    const shouldPageChange = confirm(
        `${this.dataset.page || this} Website may contain Malicious content. Do you still wish to continue?`
    );
    if (!shouldPageChange) {
        e.preventDefault();
    }
    console.log(shouldPageChange)
})


// signupForm.addEventListener('submit', function (e) {
//     console.log(e)
//     e.preventDefault()
//     console.error(e.currentTarget.name.value);
//     console.log(e.currentTarget.email.value);
//     e.currentTarget.querySelector('[name="email"]')
// })


signupForm.addEventListener('submit', function (e) {
    const name = e.currentTarget.name.value;
    if (name.includes('chad')) {
        alert("Sorry Bro!")
        e.preventDefault()
    }
    // e.currentTarget.value = ""
})

