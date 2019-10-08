import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource);

//custom directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
})

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
