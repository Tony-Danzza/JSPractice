function Slider(slider) {
    // console.log(slider)
    // console.log(slider instanceof(Element));
    // NEEDS TO BE WRAPPED IN () for bang to work right
    if (!(slider instanceof Element)) {
        throw new Error("No valid Slider found on page!")
    }

    let prevEl;
    let current;
    let nextEl;

    const slides = slider.querySelector(".slides")
    const nextBtn = document.querySelector('.go-to-next')
    const prevBtn = document.querySelector('.go-to-prev')
    // console.log(prevBtn, nextBtn);
    // console.log(slides.firstElementChild)
    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild
        // console.log(current)
        prevEl = current.previousElementSibling || slides.lastElementChild
        nextEl = current.nextElementSibling || slides.firstElementChild
        console.log(!!prevEl, !!nextEl, "TestME");
    }
    
    function applyClasses() {
        prevEl.classList.add('prev')
        current.classList.add('current')
        nextEl.classList.add('next')

    }

    function move(direction) {
        // define an array of a classes to remove and use spread operator to apply
        const classesToRemove = ['prev', 'current', 'next']
        // NOTE: pass an array of item to remove class values from and loop over with forEach. Where el will = each item in the array
        [prevEl, current, nextEl].forEach((el) => (el.classList.remove(...classesToRemove)));
        // prevEl.classList.remove(...classesToRemove)
        // current.classList.remove(...classesToRemove)
        // nextEl.classList.remove(...classesToRemove)
        if (direction === 'back') {
            
            
        }
    }
    
    // Functions to run upon calling Slider()
    startSlider()
    applyClasses()
}
// const test = 
const mainSlider = Slider(document.querySelector('.main-slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))
