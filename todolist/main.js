const incompleteList = document.querySelector('.incomplete-todos')

const completeList = document.querySelector('.complete-todos')

// const newTodo = document.querySelector('#todo-text')
// const todoBtn = document.querySelector('button')

// const form = document.querySelector('form').elements['todo']
const todoForm = document.querySelector('[name="todo-form"]')


// console.log(todoForm.value);



const todos = [
    {id: 1, text: "new todo one", completed: false},
    {id: 2, text: "new todo two", completed: false},
    {id: 3, text: "new todo three", completed: false},
]

// console.log(todos[1])

todos.forEach((todo, i) => {
    console.log(`${i}: ${todo.text}`)
    incompleteList.innerHTML += `<li>${i+1}: ${todo.text}</li>`
    // incompleteList.innerHTML += todo
    // incompleteList.appendChild(todo)
    
   
});



todoForm.addEventListener('submit', function (e) {
    const todo = e.currentTarget.todo.value
    // if (todo.include(' ')) {
    //     e.preventDefault()
    // } else {
    //     incompleteList.innerHTML += `
    //     <li>${todo}</li>`
        
    // }
    // todos.push(todo)
    const id = Math.floor(Math.random() * 100)
    console.log(id)
    // todos.push({
    //     id: id,
    //     text: todo,
    //     completed: false
    // })
    // incompleteList.appendChild()
    
    console.log(todo)
    
    
})

console.log(todos);