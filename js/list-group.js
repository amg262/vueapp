Vue.component('list-group', {

    props: {
        groups: {
            type: Array
        },
    },

    methods: {
    },
    template: `
      <b-list-group  v-for="(todo, index) in groups" :key="todo" :item="groups">
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <script>console.log(todo)</script>
        {{ todo.name }} 
        <b-badge variant="primary" pill>{{ todo.qty }}</b-badge>
      </b-list-group-item>
      </b-list-group>
    `
})