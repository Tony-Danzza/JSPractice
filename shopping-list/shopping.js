const shoppingForm = document.querySelector('.shopping')

const list = document.querySelector('.list')

let items = []


// function handleSubmit(e) {
//     e.preventDefault()
//     console.log("Submitted")
//     const name = e.currentTarget.item.value
//     console.log(name.length)
//     if (name) {
//         console.log(e.currentTarget)
//         console.log(name);
//         const item = {
//             name,
//             id: Date.now(),
//             complete: false,
//         }
//         items.push(item)
//         displayItems()
//     } e.currentTarget.item.value = ""
//     console.log(`There are now ${items.length} in your state.`);

// }
// NOTE: refactored
function handleSubmit(e) {
    e.preventDefault()
    const name = e.currentTarget.item.value

    if (!name) return;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    }
    items.push(item)
    // displayItems()
    e.currentTarget.item.value = ""
    console.log(`There are now ${items.length} in your state.`);
    list.dispatchEvent(new CustomEvent("itemsUpdated"))

    
}

shoppingForm.addEventListener('submit', handleSubmit)

function displayItems() {
    console.log(items)
    const html = items.map((item) =>
        `<li class="shopping-item">
        <input type="checkbox" value="${item.id}" ${item.complete ? "checked" : ""}>
        <span class="item-name">${item.name}</span>
        <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
        >
        &times;</button>
        </li>`).join('')
    // console.log(html);
    list.innerHTML = html
    // list.dispatchEvent(new CustomEvent('Custom Event Dispatched!'))
    // list.dispatchEvent(new CustomEvent('itemsUpdated'))

}

// list.addEventListener('itemsUpdated', (e) => {
//     console.log(e);
// })
list.addEventListener('itemsUpdated', displayItems)

function mirrorToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items))
    console.log("Saving items to local storage")

}
list.addEventListener('itemsUpdated', mirrorToLocalStorage)


function restoreFromLocalStorage() {
    console.log("Restoring local storage")
    const lsItems = JSON.parse(localStorage.getItem("items"))
    // console.log(localStorage.getItem(JSON.parse(items)))
    console.log(lsItems);

    if (lsItems.length) {
        // lsItems = items
        //     lsItems.forEach(item=> items.push(item))
        items.push(...lsItems)
        list.dispatchEvent(new CustomEvent('itemsUpdated'))
    }
}
restoreFromLocalStorage()
// const buttons = document.querySelectorAll('button')
// console.log(buttons);
function deleteItem( id ) {
    console.log("Deleting Item", id);
    items = items.filter((item) => item.id !== id);
    
    list.dispatchEvent(new CustomEvent('itemsUpdated'))
    // localStorage.removeItem("item")

}


function markAsComplete(id) {
    console.log("Mark as complete", id)
    const itemRef = items.find((item) => item.id === id)
    itemRef.complete = !itemRef.complete
    console.log(itemRef);
    list.dispatchEvent(new CustomEvent('itemsUpdated'))

}

list.addEventListener('click', function (e) {
    // console.log(e.target, e.currentTarget)
    const id = parseInt(e.target.value)
    if (e.target.matches('button')) {
        deleteItem(id)
        console.log(typeof e.target.value);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id)
    }
})

