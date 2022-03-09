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
            this.todo = {name: '', qty: '', desc: ''}
        },
        addEaten(newEaten) {

            if (newEaten.qty > 0) {
                newEaten.qty--
                alert("Item: " + newEaten.name + " with a " + "New Qty: " + String(newEaten.qty))
                this.eaten.push(newEaten)

            } else {
                this.addExpired(newEaten)
                this.expired.push(newExp)
            }
            this.todo = {name: '', qty: '', desc: ''}
        },
        addExpired(newExp) {
            this.expired.push(newExp)
            this.todos.splice(newExp, 1)
            this.todo = {name: '', qty: '', desc: ''}
        },
        storeTodo() {
            this.todos.push(this.todo)
            this.todo = {name: '', qty: '', desc: ''}
        },

        updateTodo(todo, index) {
            this.todos.splice(todo, 1, index)
            this.todo = {name: '', qty: '', desc: ''}
            this.isEditing = false
        },

        editTodo2(todo, index) {
            this.isEditing = true
            this.todo = todo
            this.selectedIndex = index
        },
        watch: {
            todos: {
                // call this function before the data in shoppingList changes
                handler: function (newList) {
                    // store in localStorage
                    localStorage.setItem('list2', JSON.stringify(newList))
                },
                // watch nested properties as well
                deep: true
            }
        },
        mounted: function () {
            // replace local array with one in local storage
            if (localStorage.getItem('list2')) {
                this.todos = JSON.parse(localStorage.getItem('list2'));
            }
        },
    }
})
