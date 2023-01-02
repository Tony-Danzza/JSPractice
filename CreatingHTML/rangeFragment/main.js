const height = 800
const width = 600
const src = 'https://picsum.photos/'

const alt = "Random item from picsum"

const myHtml = `
<div class="wrapper">    
<img src="${src}/${width}/${height}/" alt="${alt}">
</div>`

// myHtml will be inserted as a string
// so you will not be able to add a class attribute or anything similar to it like this.


console.log(typeof(myHtml))

const container = document.querySelector('.container')

// would add it to the items inside the container
// container.innerHTML += myHtml
// would include it with items already inside the container
container.innerHTML = myHtml


// NOTE: you can still access the element from the DOM and then work with it like normal HTML
const img = document.querySelector('.wrapper img')

img.addEventListener('click', function () {
    img.classList.toggle('round')
})