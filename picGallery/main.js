function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!')
    }
    // console.log(gallery)
    const images = Array.from(gallery.querySelectorAll('img'))
    // console.log(images)
    // images.forEach((image)=> console.log(image))
    const modal = document.querySelector('.mymodal')
    const prevBtn = modal.querySelector('.prev')
    const nextBtn = modal.querySelector('.next')
    let currentImg


    function openModal() {
        console.info('opening modal')
        if (modal.matches(".open")) {
            console.info("Modal Already Open");
            // NOTE: will prevent modal from activating animations while open
            return;
        }
        modal.classList.add('open')
        // NOTE: event listeners to be bound on opening modal

        window.addEventListener('keyup', handleKeyUp)
        nextBtn.addEventListener('click', showNextImage)
        prevBtn.addEventListener('click', showPrevImage)
        
    }

    function closeModal() {
        modal.classList.remove('open')
        window.removeEventListener('keyup', handleKeyUp)
        nextBtn.removeEventListener('click', showNextImage)
        prevBtn.removeEventListener('click', showPrevImage)
        //NOTE: add events for clicks and other keys
    }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    function handleKeyUp(event) {
        // NOTE: Adding 'return' will stop script from continuing upon calling following function
        if (event.key === "Escape") return closeModal();
        if (event.key === "ArrowRight") return showNextImage(); 
        if (event.key === "ArrowLeft") return showPrevImage();
        
    }

    function showNextImage() {
        // console.log(currentImg.nextElementSibling);
        showImage(currentImg.nextElementSibling || gallery.firstElementChild)
    }
    function showPrevImage() {
        // console.log(currentImg.previousElementSibling);
        showImage(currentImg.previousElementSibling || gallery.lastElementChild)
    }


    function showImage(el) {
        if (!el) {
            console.info("No image to show.")
            return;
        }
        // console.log(el);
        modal.querySelector('img').src = el.src
        modal.querySelector('h2').textContent = el.title
        // console.log(el.dataset.description)
        modal.querySelector('p').textContent = el.dataset.description
        
        currentImg = el
        openModal()
    }
    // function handleImageClick(event) {
    //     showImage(event.currentTarget)
    // }
    
    // There are out EventListeners
    images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)));
    
    images.forEach(image => image.addEventListener('keyup', (e) => {
        if (e.key === "Enter") {
            return showImage(e.currentTarget)
        }
    }))
    modal.addEventListener('click', handleClickOutside)
   
}

const gallery1 = Gallery(document.querySelector('.gallery1'))
const gallery2 = Gallery(document.querySelector('.gallery2'))