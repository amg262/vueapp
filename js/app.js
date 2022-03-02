// const td = localStorage.getItem(todo)
const app = new Vue({
    el: '#app',

    data: {
        isEditing: false,
        todo: {name: '', desc: ''},

        todos: [],
        foods: [],
        favorites: [],
        eaten: [],
        expired: [],
        selectedTodo: null
    },

    methods: {
        addFavorite(newFav) {
            this.favorites.push(newFav);
            this.todo = {name: '', desc: ''};
        },
        addEaten(newEaten) {
            this.eaten.push(newEaten)
            this.todo = {name: '', desc: ''};
        },
        addExpired(newExp) {
            this.expired.push(newExp)
            this.todos.splice(newExp, 1)

            this.todo = {name: '', desc: ''};
        },
        storeTodo() {
            this.todos.push(this.todo)
            this.todo = {name: '', desc: ''}
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
        updateTodo(todo, index) {

            this.todos.splice(todo, 1, index)
            this.todo = {name: '', desc: ''}
            this.isEditing = false
        },
        //
        editTodo2(todo, index) {
            console.log("edittodo2")
            console.log("todo")
            console.log(todo)
            console.log("index")
            console.log(index)
            this.isEditing = true
            this.todo = todo

            this.selectedIndex = index
        },

    }


})

// myStorage = window.localStorage;
// localStorage.setItem('todo', todo);
