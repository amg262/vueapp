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
        },
        num: 0,
    },

    methods: {

        favoriteTodo(todo) {
            this.$emit("fav", todo);
            this.todo = {name: '', qty: '', desc: ''}
        },
        eatTodo(todo) {
            this.$emit("eat", todo);
            this.todo = {name: '', qty: '', desc: ''}

        },
        expireTodo(todo) {
            this.$emit("exp", todo);
            this.todo = {name: '', qty: '', desc: ''}

        },

        updateTodo() {
            this.$emit("update", todo);
        },
        editTodo(todo, index) {
            this.$emit("edit", todo, index);
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

            :title="'# ' + (num = index + 1)"
        >

          <b-card-text>
            <strong>Name: </strong> {{ todo.name }}
            <br/>
            <strong>Desc: </strong> {{ todo.desc }}
            <br/>
            <strong>Qty: </strong> {{ todo.qty }}
          </b-card-text>
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