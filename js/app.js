// const td = localStorage.getItem(todo)
const app = new Vue({
    el: '#app',

    data: {
        isEditing: false,
        todo: {name: '', desc: ''},

        todos: [],
        foods: [],
        favorites: [],
        eats: [],
        exps: [],
        selectedTodo: null
    },

    methods: {

        addFavorite(newFav) {
            this.favorites.push(newFav);
            this.todo = {name: '', desc: ''};

            console.log(newFav);
            console.log("favs" + this.favorites);
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

    }


})

// myStorage = window.localStorage;
// localStorage.setItem('todo', todo);
