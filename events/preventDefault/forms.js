const wes = document.querySelector('.wes')

wes.addEventListener('click', function (e) {
    console.log(e)
    e.preventDefault()
    const shouldChangePage = confirm(
        `${this.dataset.page || this} Website may contain Malicious content. Do you still wish to continue?`
    );
    if (shouldChangePage) {
        window.location == e.currentTarget.href;
    }
    console.log(shouldChangePage);
    
})