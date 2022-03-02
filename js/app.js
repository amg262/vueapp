// const td = localStorage.getItem(todo)
const app = new Vue({
    el: '#app',

    data: {
        isEditing: false,
        todo: {name: 'item', qty: 1, desc: 'desc'},

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
            this.todo = {name: '', qty:'', desc: ''}
        },
        addEaten(newEaten) {
            newEaten.qty--
            this.eaten.push(newEaten)
            alert("Item: " + newEaten.name + " | " + "Qty: " + String(newEaten.qty))
            console.log(newEaten)
            console.log(newEaten.qty)


            this.todo = {name: '', qty:'', desc: ''}
        },
        addExpired(newExp) {
            this.expired.push(newExp)
            this.todos.splice(newExp, 1)
            Console.log("addExpired")
            console.log(newExp)
            console.log(newExp.qty)

            this.todo = {name: '', qty:'', desc: ''}
        },
        storeTodo() {
            this.todos.push(this.todo)
            this.todo = {name: '', qty:'', desc: ''}
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

            console.log('updatetodo')
            console.log('todo')
            console.log(todo)
            console.log('index')
            console.log(index)
            console.log('isEditting')
            console.log(this.isEditing)

            this.todos.splice(todo, 1, index)
            this.todo = {name: '', qty:'', desc: ''}
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
