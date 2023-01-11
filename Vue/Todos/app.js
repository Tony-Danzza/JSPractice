const { createApp } = Vue

const todos = [
    { id: 1, text: "Hello Test", completed: false},
    { id: 2, text: "Hello World", completed: false},
    { id: 3, text: "Hello New Test World", completed: false}
]

// newTodo: {
//     id: Math.floor(Math.random() * 100000),
//     text: "",
//     completed: false
// }
createApp({
    data() {
        return {
            message: "Hello, Vue",
            todos: todos,
            newTodo: {
                text: "",
                completed: false,
                id: 1
            }            
        }
    },
    methods: {
        addTodo: function () {
            
            this.todos.push({
                text: this.newTodo.text,
                id: Math.floor(Math.random() * 100),
                completed: false
            })
        },
        deleteTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
            
        },

        toggleStatus: function (todo) {
            todo.completed = !this.todos.completed
            
        },

        // toggleClass: function (todo) {
        //     todo.classList.add('active')
        // }




        
            
    }, 


}).mount('#app')
