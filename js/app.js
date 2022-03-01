// const td = localStorage.getItem(todo)
const app = new Vue({
    el: '#app',

    data: {
        isEditing: false,
        todo: {name: '', desc: ''},

        todos: [],
        foods: [],
        favs: [],
        eats: [],
        exps: [],
        selectedTodo: null
    },

    methods: {
        //
        favTodo() {
            this.favs.push(this.todo)
            this.todo = ""
        },
        // },
        // eatTodo() {
        //     this.eats.push(this.todo)
        //     this.todo = ""
        //
        // },
        // expTodo(todo) {
        //     this.exps.push(this.todo)
        //     this.todo = ""
        // },
        storeTodo() {
            this.todos.push(this.todo)
            this.todo = ''
        },

        //
        // removeTodo(index, todo) {
        //     this.todos.splice(index, 1)
        //     this.eats.push(todo)
        // },
        //
        // unremoveTodo() {
        //
        // },
        //
        // updateTodo() {
        //     this.todos.splice(this.selectedIndex, 1, this.todo)
        //     this.todo = ''
        //     this.isEditing = false
        // },
        //
        // editTodo(index, todo) {
        //     this.isEditing = true
        //     this.todo = todo
        //     this.selectedIndex = index
        // },

        maths() {

        }
    }


})

// myStorage = window.localStorage;
// localStorage.setItem('todo', todo);
