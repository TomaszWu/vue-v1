new Vue({
  el: '#vue-app',
  data: {
    name: "Tomek",
    website: 'https://siatkana100procent.pl',
    websiteTag: '<a href="https://siatkana100procent.pl"> drugi link</a>',
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  },
});
