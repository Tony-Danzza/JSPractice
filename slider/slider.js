function Slider(slider) {
    // console.log(slider)
    // console.log(slider instanceof(Element));
    // NEEDS TO BE WRAPPED IN () for bang to work right
    if (!(slider instanceof Element)) {
        throw new Error("No valid Slider found on page!")
    }

    let current;
    let nextEl;
    let prevEl;

    const slides = slider.querySelector(".slides")
    const nextBtn = document.querySelector('.go-to-next')
    const prevBtn = document.querySelector('.go-to-prev')
    // console.log(prevBtn, nextBtn);
    // console.log(slides.firstElementChild)
    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild
        console.log(current)
        prevEl = current.previousElementSibling
        nextEl = current.nextElementSibling
        prevEl.
        console.log(prevEl);
    }

    startSlider()
}
// const test = 
const mainSlider = Slider(document.querySelector('.main-slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))
