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

myList.classList.add('container')

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