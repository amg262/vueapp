const app = new Vue({
    el: '#app',

    // data: all the data for the app
    data: function() {
        return {
            newItem: {
                name: '',
                qty: 1,
                purchased: false,
                category: 'need'
            },
            shoppingList: [
                {name: 'Hammer', qty: 1, purchased: true, category: 'need'},
                {name: 'Nails', qty: 10, purchased: false, category: 'need'},
                {name: 'Sliding Compound Miter Saw', qty: 1, purchased: false, category: 'want'}
            ],
        }
    },
    // methods: usually "events" triggered by v-on:
    methods: {
        addIt: function(e){
            // prevent page from reloading
            //e.preventDefault(); // not needed if using @submit.prevent

            // add the item to the array
            this.shoppingList.push(this.newItem);

            // clear the form
            this.newItem = {
                name: '',
                qty: 1,
                purchased: false,
                category: 'need'
            };

            // close the modal window
            // (eventually this won't be jQuery)
            $('#addItemModal').modal('hide');
        },

        removeIt: function(item){
            console.log(item);
            this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
        }
    },
    // computed: values that are updated and cached if dependencies change
    computed: {
        needList: function(){
            return this.shoppingList.filter(function(item){
                return item.category === "need" && !item.purchased
            });
        },
        gotList: function(){
            return this.shoppingList.filter(function(item){
                return item.purchased
            });
        },
        wantList: function(){
            return this.shoppingList.filter(function(item){
                return item.category === "want" && !item.purchased
            });
        },
    },
    //mounted:  called after the instance has been mounted,
    mounted: function() {
        // replace local array with one in local storage
        if(localStorage.getItem('shoppingList')){
            this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        }
    },


    // watch: calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        shoppingList: {
            // call this function before the data in shoppingList changes
            handler: function(newList){
                // store in localStorage
                localStorage.setItem('shoppingList', JSON.stringify(newList))
            },
            // watch nested properties as well
            deep: true
        }
    }
});
