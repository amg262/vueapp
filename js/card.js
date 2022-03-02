Vue.component('fcard', {

    props: {
        todos: {
            type: Array,
        },
        favorites: {
            type: Array,
        }
    },

    methods: {

        //Hooking this up to the butto
        favoriteTodo() {
            this.$emit("fav", this.todo);
            this.todo = {name: '', desc: ''}
        },
        // eatTodo() {
        //     this.eats.push(this.todo)
        //     this.todo = {name: '', desc: ''}
        //
        // },
        // expTodo(todo) {
        //     this.exps.push(this.todo)
        //     this.todo = {name: '', desc: ''}
        // },
        // storeTodo() {
        //     this.todos.push(this.todo)
        //     this.$emit('add', this.todo)
        //     this.todo = {name: '', desc: ''}
        // },
        // removeTodo(index, todo) {
        //     this.todos.splice(index, 1)
        //     this.eats.push(todo)
        // },
        // updateTodo() {
        //     this.todos.splice(this.selectedIndex, 1, this.todo)
        //     this.todo = ''
        //     this.isEditing = false
        // },
        // editTodo(index, todo) {
        //     this.isEditing = true
        //     this.todo = todo
        //     this.selectedIndex = index
        // },
    },
    template: `<b-row>
                <b-col cols="3" md="3" v-for="(todo, index) in todos">
                <b-card 
                        class="mb-2"
                        img-alt="Image"
                        img-src=""
                        img-top
                        style="max-width: 20rem;"
                        tag="article"
                        :title="todo.name"
                >
                    <h6>Item:</h6>
                    <b-card-text>
                        {{ todo.desc }}
                    </b-card-text>4
                    <div class="mt-3">
                        <b-button-group>
                        
                            <b-button @click="editTodo(index, todo)" variant="success">Edit</b-button>
                            <b-button  @click="removeTodo(index, todo)" variant="info">Eat</b-button>
                            <b-button  @click="favoriteTodo()" variant="warning">Favorite</b-button>
                            <b-button @click="expTodo(index, todo)" variant="outline-primary">Exp.</b-button>
                        </b-button-group>
                    </div>
                </b-card>
            </b-col>
        </b-row>`
})