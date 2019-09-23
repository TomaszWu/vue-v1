<template>
  <ul>
    <li v-for="ninja in ninjas">
        {{ ninja }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['Yosi', 'Mario', 'Ryou']
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
