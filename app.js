Vue.component('greeting', {
  template: '<p>reausable components {{ name }} . <button v-on:click="changeName">Change Name</button></p>',
  data: function() {
    return {
      name: 'Tomek',
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario';
    }
  }
});


var one = new Vue({
  el: '#vue-app-one',

});

var two = new Vue({
  el: '#vue-app-two',

});

two.title = "changed from outside";
