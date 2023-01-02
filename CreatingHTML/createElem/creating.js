let myPara = document.createElement('p')

console.log(myPara)

myPara.textContent = "i am a p"
console.log(myPara.innerText)


const myImg = document.createElement('img')

myImg.src = 'https://picsum.photos/500';

myImg.alt = "Random Photo"
console.log(myImg)

const myDiv = document.createElement('div')

myDiv.classList.add('wrapper')
console.log(myDiv)

// document.body.appendChild(myPara)


myDiv.appendChild(myPara)
myDiv.appendChild(myImg)
document.body.appendChild(myDiv)

myImg.addEventListener('click', function () {
    myImg.classList.toggle("round")
})

const dogs = ['Finn', 'Tito', 'Stella', 'Sadie']


const myList = document.createElement("ul")

myList.classList.add('animals')

for (let i = 0; i < dogs.length; i++){
    const dogList = document.createElement('li')
    dogList.innerText += dogs[i]
    myList.appendChild(dogList)
    document.body.appendChild(myList)
}

const item = document.createElement('h1')

item.textContent = dogs.forEach(dog => {
    console.log(dog)
    
})

document.body.appendChild(item)


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