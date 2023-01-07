const shoppingForm = document.querySelector('.shopping')

const list = document.querySelector('.list')

const items = []

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
        <input type="checkbox">
        <span class="item-name">${item.name}</span>
        <button>&times;</button>
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
    localStorage.setItem(items, JSON.stringify(items))
    console.log("Saving items to local storage")

}
list.addEventListener('itemsUpdated', mirrorToLocalStorage)


function restoreFromLocalStorage() {
    console.log("Restoring local storage")
    const lsItems = JSON.parse(localStorage.getItem('items'))
    console.log(lsItems);

    if (lsItems.length) {
        lsItems.forEach(item=> items.push(item))
        list.dispatchEvent(new CustomEvent('itemsUpdated'))
    }
}

list.addEventListener('itemsUpdated', restoreFromLocalStorage)