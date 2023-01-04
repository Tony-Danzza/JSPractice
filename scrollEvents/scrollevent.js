// const terms = document.querySelector(".terms-and-conditions");

// console.log(terms)
// terms.addEventListener('scroll', function (e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// })
function scrollToAccept() {
    const terms = document.querySelector(".terms-and-conditions");

    if (!terms) {
        return
    }
    terms.addEventListener('scroll', function (e) {
        console.log(e);
        console.log(e.currentTarget)
        console.log(e.currentTarget.scrollTop)
        console.log(e.currentTarget.scrollHeight)
        const leftOver = (e.currentTarget.scrollHeight - e.currentTarget.scrollTop) - 786
        console.log(leftOver);
    })
}

scrollToAccept();