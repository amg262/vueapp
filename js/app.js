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

                //alert("Cant have Item " + newEaten.name + " qty of " + String(newEaten.qty))

            }

            console.log(newEaten)
            console.log(newEaten.qty)


            this.todo = {name: '', qty: '', desc: ''}
        },
        addExpired(newExp) {
            this.expired.push(newExp)
            this.todos.splice(newExp, 1)
            Console.log("addExpired")
            console.log(newExp)
            console.log(newExp.qty)

            this.todo = {name: '', qty: '', desc: ''}
        },
        storeTodo() {
            this.todos.push(this.todo)
            this.todo = {name: '', qty: '', desc: ''}
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
            this.todo = {name: '', qty: '', desc: ''}
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

// myStorage = window.localStorage;
// localStorage.setItem('todo', todo);
