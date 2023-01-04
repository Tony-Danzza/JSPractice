const terms = document.querySelector('.terms-and-conditions')
const watch = document.querySelector('.watch')
const acceptBtn = document.querySelector('.accept')



function obCallback(payload) {
    console.log(payload[0]);
    console.log(payload[0].isIntersecting);
    console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
        acceptBtn.disabled = false;
        console.log('Removing disabled')
        ob.unobserve(terms.lastElementChild)
        
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
})

// console.log(ob)
// ob.observe(watch)
ob.observe(terms.lastElementChild)



