const height = 800
const width = 600
const src = 'https://picsum.photos/'

const alt = "Random item from picsum"

const myHtml = `<div class="wrapper">
<img src="${src}/${width}/${height}/" alt="${alt}">
</div>`

// const container = document.querySelector('.container')

// container.innerHTML += myHtml

const myFrag = document.createRange().createContextualFragment(myHtml)

console.log(myFrag);


console.log(myFrag.querySelector('img'))

console.log(myFrag)

document.body.appendChild(myFrag)