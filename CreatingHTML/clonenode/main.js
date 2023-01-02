const myList = document.createElement('ul')

myList.classList.add("list")
document.body.appendChild(myList)

for (let i = 1; i < 6; i++){
    myList.innerHTML += `<li>${i}</li>`
}

const li6 = myList.cloneNode(true)

console.log(li6)