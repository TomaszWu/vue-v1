var one = new Vue({
  el: '#vue-app',
  data: {
    output: 'your fav food',
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input.value;
    }
  }
});
