const incompleteList = document.querySelector('.incomplete-todos')

const completeList = document.querySelector('.complete-todos')



const todos = [
    {id: 1, text: "new todo one", completed: false},
    {id: 2, text: "new todo two", completed: false},
    {id: 3, text: "new todo three", completed: false},
]

console.log(todos[1])

todos.forEach((todo, i) => {
    console.log(`${i}: ${todo.text}`)
    incompleteList.innerHTML += `<li>${i+1}: ${todo.text}</li>`
    // incompleteList.innerHTML += todo
    // incompleteList.appendChild(todo)
    
   
});
todoEl = document.querySelectorAll()
// localStorage.setItem("todo", "todotest1")
