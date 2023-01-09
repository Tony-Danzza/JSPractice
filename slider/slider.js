function Slider(slider) {
    // console.log(slider)
    console.log(slider instanceof(Element));
    // NEEDS TO BE WRAPPED IN () for bang to work right
    if (!(slider instanceof Element)) {
        throw new Error("No valid Slider found on page!")
    }

    let current;
    let nextEl;
    let prevEl;
    
    const slides = slider.querySelectorAll(".slide")
    const nextBtn = document.querySelector('.go-to-next')
    const prevBtn = document.querySelector('.go-to-prev')
    console.log(prevBtn, nextBtn);
    
    // slides.forEach((slide) => console.log(slide.textContent))
}
// const test = 
const mainSlider = Slider(document.querySelector('.main-slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))