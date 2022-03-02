Vue.component('fcard', {

    props: {
        isEditing: false,
        selectedTodo: null,
        todos: {
            type: Array,
        },
        favorites: {
            type: Array,
        },
        eaten: {
            type: Array,
        },
        expired: {
            type: Array,
        }
    },

    methods: {

        //Hooking this up to the butto
        favoriteTodo(todo) {
            this.$emit("fav", todo);
            this.todo = {name: '', desc: ''}
        },
        eatTodo(todo) {
            this.$emit("eat", todo);
            this.todo = {name: '', desc: ''}

        },
        expireTodo(todo) {
            this.$emit("exp", todo);
            this.todo = {name: '', desc: ''}
        },
        // storeTodo() {
        //     this.todos.push(this.todo)
        //     this.$emit('add', this.todo)
        //     this.todo = {name: '', desc: ''}
        // },
        // removeTodo(index, todo) {
        //     this.todos.splice(index, 1)
        //     this.eats.push(todo)
        // },
        updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.todo = ''
            this.isEditing = false
        },
        editTodo(todo, index) {
            console.log('edittodo')
            console.log("index")
            console.log(index)
            console.log("todo")
            console.log(todo)
            this.$emit("edit", todo);

            this.isEditing = true
            this.todo = todo
            this.selectedIndex = index
        },
    },
    template: `
      <b-row>
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
          </b-card-text>
          4
          <div class="mt-3">
            <b-button-group>

              <b-button @click="editTodo(todo, index)" variant="success">Edit</b-button>
              <b-button @click="eatTodo(todo)" variant="info">Eat</b-button>
              <b-button @click="favoriteTodo(todo)" variant="warning">Favorite</b-button>
              <b-button @click="expireTodo(todo)" variant="outline-primary">Exp.</b-button>
            </b-button-group>
          </div>
        </b-card>
      </b-col>
      </b-row>`
})