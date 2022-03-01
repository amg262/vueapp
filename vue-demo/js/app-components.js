Vue.component('List', {
    props: {
        items: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            default: 'Get It',
        },
    },

    methods: {},

    template: `
      <div class="get-it-list">
      <h3>{{ name }}</h3>
      <ul class="list-group list-group-flush">
        <list-item v-for="(item, i) in items" :key="item.name" :item="item"
                   @remove-item="theItemEmitted => $emit('remove-item', theItemEmitted)"
        ></list-item>
      </ul>
      <p>
        <small>Total: {{ items.length }}</small>
      </p>
      </div>`,

    computed: {}
});

Vue.component('ListItem', {
    // this works like a "static"
    // same value for all instances
    // data: {
    //    uid: Math.floor(Math.random() * 10e16);
    // },

    // this works more like a constructor
    // calls this function everytime a component is created
    data: function () {
        return {
            uid: Math.floor(Math.random() * 10e16),
        }
    },

    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    methods: {
        add: function () {
            this.item.qty++;
        },
        subtract() {
            this.item.qty--;

            // remove item if it gets to zero
            // DO NOT DO THIS
            // app.shoppingList.splice(.....)

            if (this.item.qty <= 0) {
                // this will emit an event called "remove-item"
                this.$emit('remove-item', this.item)
            }

        },
    },

    computed: {
        checkboxId: function () {
            return "purchased-" + this.uid;
        }
    },

    template: `
      <li class="list-group-item">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" :id="checkboxId" class="custom-control-input" v-model="item.purchased">
        <label :for="checkboxId" class="custom-control-label">{{ item.name }}</label>
      </div>
      <div class=" d-flex justify-content-between">
        <div>
          <small>Qty: {{ item.qty }}</small>
        </div>
        <div>
          <button class="btn btn-tiny" v-on:click="add()"><i class="fas fa-plus-circle"></i></button>
          <button class="btn btn-tiny" @click="subtract()"><i class="fas fa-minus-circle"></i></button>
        </div>
      </div>
      </li>`,

});
