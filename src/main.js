import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
})

export const bus = new Vue();

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
