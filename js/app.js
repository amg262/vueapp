// const td = localStorage.getItem(todo)
const app = new Vue({
    el: '#app',

    data: {
        isEditing: false,
        todo: '',
        todos: [],
        favs: [],
        comp: [],
        selectedTodo: null
    },

    methods: {

        favoriteTodo() {
            this.favs.push(this.todo)

            console.log(this.favs)
        },


        storeTodo() {
            this.todos.push(this.todo)
            this.todo = ''
        },

        removeTodo(index, todo) {
            this.todos.splice(index, 1)
            this.comp.push(index, todo)
        },

        unremoveTodo() {

        },

        updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.todo = ''
            this.isEditing = false
        },

        editTodo(index, todo) {
            this.isEditing = true
            this.todo = todo
            this.selectedIndex = index
        },

        maths() {

        }
    }


})

// myStorage = window.localStorage;
// localStorage.setItem('todo', todo);
