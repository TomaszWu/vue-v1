<template>
  <div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas,
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
